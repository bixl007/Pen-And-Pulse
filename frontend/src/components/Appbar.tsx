import { Link, useLocation, useNavigate } from "react-router-dom";

export const Appbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  

  return (
    <div className="border-b flex items-center justify-between p-2 px-4 ">
      <Link to={"/blogs"}>
        <div>Pen & Pulse</div>
      </Link>
      <div className="flex gap-6">
        <Link to="/publish">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 w-32 h-10"
          >
            Publish
          </button>
        </Link>
        {location.pathname === "/blogs" ? (
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 w-32 h-10"
            onClick={logout}
          >
            Logout
          </button>
        ) : null}
        <div className="w-10 h-10">
          <img src="https://postimg.cc/MnNBKYGR" alt="a" />
        </div>
      </div>
    </div>
  );
};

