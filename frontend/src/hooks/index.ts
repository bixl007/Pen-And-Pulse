import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface Blog {
  content: string;
  title: string;
  id: number;
  author?: {
    name?: string;
  };
  createdAt: Date; // Change to string to match API response
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      })
      .then((response) => {
        setBlogs(
          response.data.blogs.map((blog: Blog) => ({
            ...blog,
            createdAt: new Date(blog.createdAt), // Ensure it's a Date object
          }))
        );
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { loading, blogs };
};


export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      })
      .then((response) => {
        const fetchedBlog = response.data.blog;
        setBlog({
          ...fetchedBlog,
          createdAt: new Date(fetchedBlog.createdAt), // Convert to Date
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  return { loading, blog };
};
