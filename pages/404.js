import { useEffect } from "react";
import styled from "styled-components";
import Router from "next/router";

export default function Error404() {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 5000);
  }, []);

  return (
    <Error>
      ! 404 : 페이지를 찾을 수 없습니다.
      <br />
      <br />
      5초 후 메인 페이지로 이동합니다.
    </Error>
  );
}

const Error = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
