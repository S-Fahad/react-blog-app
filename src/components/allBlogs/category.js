import { useParams } from "react-router";
import { useContext, useState, useEffect } from "react";
import { allBlogs } from "./blogs";
import { NavLink } from "react-router-dom";
import "./category.css";

function Category(props) {
  const [count, setcount] = useState(2);
  const blogs = useContext(allBlogs);
  const { category } = useParams();
  console.log(props.match.params);
  const updateCount = () => {
    setcount((prev) => prev + 2);
  };
  useEffect(() => {
    setcount(2);
  }, [category]);
  const filteredBlog = blogs.filter((values) => values.category === category);
  // console.log(filteredBlog);
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
              {filteredBlog.slice(0, count).map((values, id) => (
                <div key={id} className="category-content">
                  <div>
                    <img
                      src={values.imgUrl}
                      alt=""
                      className="category-img"
                    ></img>
                  </div>
                  <div className="category-content-div">
                    <b>{values.title}</b>
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

//

//
//
/*

const arr = [
  {
    category: "bollywood",
    name: 1,
    imgUrl:
      "https://www.wallpaperflare.com/static/533/281/308/mountains-lake-photo-body-wallpaper-preview.jpg",
  },
  { category: "food", name: 2 },
];
*/
