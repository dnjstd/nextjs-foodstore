import { useState, useEffect } from "react";
import axios from "axios";

export default function Store() {
  const [list, setList] = useState([]);

  function getData() {
    axios
      .get("http://localhost:9000/stores")
      .then((res) => {
        console.log(res.data);
        setList(res.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  // console.log("list>>>", list);

  return <div>Store페이지입니다.</div>;
}
