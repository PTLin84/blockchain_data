import React from "react";
import { useState, useEffect } from "react";

export default function News() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://newsdata.io/api/1/news?apikey=pub_273982ecd5e8c4e0fce0efd8f9993b0d6d7c9&q=bitcoin&country=us&language=en "
  //     //   { mode: "no-cors" }
  //   )
  //     .then((response) => response.json())
  //     .then((json_data) => {
  //       console.log(json_data);
  //       setData(json_data.results); // Set the data in the state
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div className="news-container">
      {data.slice(5).map((item, index) => (
        <div>
          <a key={index} href={item.link} target="_blank">
            {item.title}
          </a>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
