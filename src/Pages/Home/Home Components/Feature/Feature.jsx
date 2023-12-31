import axios from "axios";
import { useState } from "react";

const Feature = () => {
  const [blogs, setBlogs] = useState([]);
  axios.get("fakeBlog.json").then((res) => {
    setBlogs(res.data);
  });
  return (
    <div className="py-5">
        <h1 className="text-5xl font-bold text-center">Recent Blogs</h1>
      <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map((blog, i) => {
          return (
            <div
              key={i}
              className="card card-compact z-0 bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
                <p>{blog.content.slice(0, 110)}.....</p>
                <div className="card-actions mt-2 items-center justify-around">
                  <p className="text-sm text-slate-400">Published: 10-30-2023</p>
                  <button className="btn glass bg-red-500 text-lg hover:bg-red-800 text-white">Read More</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
