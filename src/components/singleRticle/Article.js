import React from "react";
import { useParams } from "react-router";
import { allBlogs } from "../allBlogs/blogs";
import { useContext } from "react";
import "./article.css";
import Footer from "../footer/footer";

function Article() {
  let { id } = useParams();
  console.log(id);
  const blogs = useContext(allBlogs);
  const filteredBlog = blogs.filter((values) => values.id === +id);
  console.log(filteredBlog);
  return (
    <div>
      <div className="articleHead">
        <div>
          <span>
            The <b>Siren</b>
          </span>
        </div>
        <button>Get Started</button>
      </div>
      <div className="articleBody">
        {filteredBlog.map((values) => (
          <div key={values.id}>
            <h2>{values.title}</h2>
            <img src={values.imgUrl} alt="" className="content-pic" />
            <p>{values.desc}</p>
          </div>
        ))}
      </div>
      <div>
        <h1>
          More from Siren <div className="underline"></div>
        </h1>
      </div>
      <div className="line"></div>
      <Footer />
      <div className="line"></div>
    </div>
  );
}

export default Article;
