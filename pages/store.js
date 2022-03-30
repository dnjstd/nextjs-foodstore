import { useEffect } from "react";
import axios from "axios";

export default function Store() {
  useEffect(() => {
    axios
      .get("http://localhost:9000/stores")
      .then((Response) => {
        console.log(Response.data);
      })
      .catch((Error) => {
        console.log(Error, "데이터를 못가져옴");
      });
  }, []);
  return <div>Store페이지입니다.</div>;
}
