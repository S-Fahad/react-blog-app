import { NavLink, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { allBlogs } from "./blogs";
import "./category.css";

function Category(props) {
  const [count, setcount] = useState(2);
  const blogs = useContext(allBlogs);
  const { category } = useParams();
  // console.log(props.match.params);
  
  const updateCount = () => {
    setcount((prev) => prev + 2);
  };


  useEffect(() => {
    setcount(2);
  }, [category]);
  const filteredBlog = blogs.filter((values) => values.category === category);
 
  return (
    <>
      <div className="category-container">
        <div>
          <h1 className="category-Title">
            {category}
            <div className="underline"></div>
          </h1>
          <div className="category-main">
            <div>
              {filteredBlog.slice(0, count).map((values, index) => (
                <div key={index} className="category-content">
                  <div>
                    <img
                      src={values.imgUrl}
                      alt=""
                      className="category-img"
                    ></img>
                  </div>
                  <div className="category-content-div">
                    <NavLink to={"/article/" + values.id}>
                      {values.title}
                    </NavLink>
                    <p>{values.about}</p>
                    <i>{values.category} /</i>
                    <i>{values.date}</i>
                  </div>
                </div>
              ))}
              <button onClick={updateCount} className="updateCount">
                Load more
              </button>
            </div>
          </div>
        </div>
        <div className="top-post">
          <h1>
            Top post
            <div className="underline"></div>
          </h1>

          <div>
            {filteredBlog.slice(0, 3).map((values, id) => (
              <div key={id} className="topPost-content">
                <div>
                  <img src={values.imgUrl} alt="" className="topPost-img"></img>
                </div>
                <div className="topPost-content-div">
                  <div className="topPost-title">
                    <b>{values.title}</b>
                  </div>
                  <p>{values.about}</p>
                  <i>{values.category} /</i>
                  <i>{values.date}</i>
                  <b className="number">{id + 1}</b>
                </div>
              </div>
            ))}
          </div>
          <div className="advertisement">
            <h2>Advertisement</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default Category;

