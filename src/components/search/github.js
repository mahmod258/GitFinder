import Search from "./search";
import Details from "./details";
import React from "react";
import { useState, useEffect } from "react";

function Github() {
  const [username, setUsername] = useState("mahmod258");
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .catch((err) => console.log(err))
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log("hello");
      });
  }, [username]);
  return (
    <div className="github">
      <Search func={(username) => setUsername(username)} />
      <Details theData={data} />
    </div>
  );
}
export default Github;
