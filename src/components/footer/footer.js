import React from "react";
import { useContext } from "react";
import { allBlogs } from "../allBlogs/blogs";

function Footer() {
  const details = useContext(allBlogs);
  const travelBlog = details.filter((values) => values.category === "Travel");
  return (
    <div>
      
      <div className="latest-stories">
        {travelBlog.map((values) => (
          <div key={values.id}>
            <h1>{values.title}</h1>
            <p>{values.desc}</p>
            <i>{values.category}</i> /<i> {values.date}</i>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
