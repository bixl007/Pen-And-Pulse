import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Sarah J.",
    location: "New York, USA",
    rating: 4.8,
    testimonial:
      "Pen & Pulse has an intuitive and clean interface that makes blogging a joy. I was able to sign up and publish my first post in minutes!",
    imageUrl: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "David L.",
    location: "London, UK",
    rating: 4.9,
    testimonial:
      "As a reader, I love the variety of content on Pen & Pulse. It's my go-to place to discover new writers and insightful articles.",
    imageUrl: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Maria G.",
    location: "Madrid, Spain",
    rating: 4.7,
    testimonial:
      "The community on Pen & Pulse is fantastic. Engaging with readers and other writers has been incredibly rewarding.",
    imageUrl: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    name: "Ken M.",
    location: "Tokyo, Japan",
    rating: 5.0,
    testimonial:
      "A truly seamless experience from writing to publishing. The platform is fast, reliable, and has all the features I need.",
    imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Loved by Writers and Readers
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover what our community is saying about their experience on Pen
            & Pulse, a dynamic platform for creating and sharing stories.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
