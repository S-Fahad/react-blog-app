import { useContext } from "react";
import { allBlogs } from "../allBlogs/blogs";
import Footer from "../footer/footer";

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
        <h1>
          home
          <div className="underline"></div>
        </h1>
      </div>
      <div className="home">
        <div className="pic1">
          <img
            src="https://cdn2.wanderlust.co.uk/media/1019/cropped-lia-and-jeremy-at-yosemite-national-park-chapel.jpg?anchor=center&mode=crop&width=1280&height=0&format=auto&quality=90&rnd=132285714670000000"
            alt=""
            className="pic1"
          ></img>
          <div className="desc1">
            <h2>Wanderlust</h2>
            <i>Travel/10-June-2021</i>
          </div>
        </div>
        <div>
          <div className="pic2">
            <img
              src="https://cdn2.wanderlust.co.uk/media/1024/cropped-shutterstock_145434481.jpg?anchor=center&mode=crop&width=1280&height=0&format=auto&quality=90&rnd=132285727150000000"
              alt=""
              className="pic2"
            ></img>
            <div className="desc2">
              <h3>Travel for Wildlife</h3>
              <i>20-July-2021</i>
            </div>
          </div>
          <div className="pic3">
            <img
              src="https://ak.picdn.net/offset/photos/5f80600b6f52af4409e4b388/medium/offset_1017486.jpg?DFghwDcb"
              alt=""
              className="pic3"
            ></img>
            <div className="desc3">
              <h2>Wanderlust</h2>
              <i>Travel/10-June-2021</i>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>
          The latest <div className="underline"></div>
        </h2>
        <div className="latest-div">
          {travelBlog.map((values) => (
            <div className="latest-content" key={values.id}>
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
                <div className="latest-articles" key={values.id}>
                  <img src={values.imgUrl} alt="" />
                  <div>
                    <h1>{values.title}</h1>

                    <i>{values.category} </i>
                    <i> {values.date}</i>
                  </div>
                </div>
              ))}
            </section>
            <section>
              <div className="advertisement">Advertisement</div>
              {topBlog.map((values) => (
                <div className="topPost" key={values.id}>
                  <img src={values.imgUrl} alt="" />
                  <div>
                    <h1>{values.title}</h1>
                    <i>{values.category} </i>
                    <i> {values.date}</i>
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
          <Footer />
        </div>
      </div>
      <div className="line"></div>
    </>
  );
}
