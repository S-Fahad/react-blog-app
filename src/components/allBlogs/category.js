import { useParams } from "react-router";
import { useContext } from "react";
import { allBlogs } from "./blogs";
import "./category.css";

function Category(props) {
  const blogs = useContext(allBlogs);
  const { category } = useParams();
  console.log(props.match.params);
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
              {filteredBlog.map((values, id) => (
                <div key={id} className="category-content">
                  <div>
                    <img
                      src={values.imgUrl}
                      alt=""
                      className="category-img"
                    ></img>
                  </div>
                  <div>
                    <h1>{values.title}</h1>
                    <p>{values.desc}</p>
                    <b>{values.category} /</b>
                    <i>{values.date}</i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="top-post">
          <h1>
            Top post
            <div className="underline"></div>
          </h1>

          <div>
            {filteredBlog.map((values, id) => (
              <div key={id} className="topPost-content">
                <div>
                  <img src={values.imgUrl} alt="" className="topPost-img"></img>
                </div>
                <div>
                  <div className="topPost-title">{values.title}</div>
                  <p>{values.desc}</p>
                  <b>{values.category} /</b>
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
