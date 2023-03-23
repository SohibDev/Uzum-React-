import axios from "axios";
import React, { useEffect, useState } from "react";

const Cards = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://63d3e856a93a149755b5c8f1.mockapi.io/products")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ul className="d-flex flex-wrap gap-3 justify-content-between mt-4">
        {posts.map((post, i) => (
          <li key={i} className="col-2 mb-3">
            <div className="card position-relative">
              <svg
                style={{ zIndex: "10" }}
                data-v-56571d0e=""
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                alt="like"
                className="ui-icon position-absolute end-0 me-2 mt-2"
                id="like"
              >
                <path
                  id="path"
                  d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                  fill="red"
                ></path>
                <path
                  d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"
                  fill="#15151A"
                ></path>
              </svg>
              <img
                width="100%"
                height="200"
                className="card-img-top w-100"
                src="https://picsum.photos/200/300"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 id="title">{post.name}</h4>
                <p id="rating">{post.rating}</p>
                <p id="price">{post.price}</p>
                <p className="category">{post.category}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cards;
