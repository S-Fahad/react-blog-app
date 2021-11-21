import { useContext } from "react";
import { allBlogs } from "../allBlogs/blogs";
import "./home.css";

export function Home() {
  const details = useContext(allBlogs);
  const travelBlog = details.filter((values) => values.category === "Travel");
  const travel = details.filter((values) => values.category === "travel");
  const topBlog = details.filter((values) => values.views >= 100);
  console.log(details);
  return (
    <>
      <div>
        <h2>home</h2>
      </div>
      <div className="home"></div>
      <div>
        <h2>
          The latest <div className="underline"></div>
        </h2>
        <div className="latest">
          {travelBlog.map((values) => (
            <div className="latest-content">
              <img src={values.imgUrl} alt="" />
              <h1>{values.title}</h1>
              <p>{values.desc}</p>
              <i>{values.category} </i>
              <i> {values.date}</i>
            </div>
          ))}
        </div>
        <div>
          <h2>
            Latest Article
            <div className="underline"></div>
          </h2>
          <div className="latest-article">
            <section>
              {travel.map((values) => (
                <div className="latest-articles">
                  <img src={values.imgUrl} alt="" />
                  <div>
                    <h1>{values.title}</h1>
                    <p>{values.desc}</p>
                    <i>{values.category} </i>
                    <i> {values.date}</i>
                  </div>
                </div>
              ))}
            </section>
            <section>
              <div className="advertisement">Advertisement</div>
              {topBlog.map((value) => (
                <div className="topPost">
                  <img src={value.imgUrl} alt="" />
                  <div>
                    <h1>{value.title}</h1>
                    <p>{value.desc}</p>
                    <i>{value.category} </i>
                    <i> {value.date}</i>
                  </div>
                </div>
              ))}
            </section>
          </div>
          <div>
            <h1>
              Latest Stories <div className="underline"></div>
            </h1>
          </div>
          <div className="line"></div>
          <div className="latest-stories">
            {travelBlog.map((values) => (
              <div>
                <h1>{values.title}</h1>
                <p>{values.desc}</p>
                <i>{values.category}</i> /<i> {values.date}</i>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
}
