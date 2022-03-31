import styled from "styled-components";
import LayoutForm from "../src/component/LayoutForm";

export default function About() {
  const title = "ABOUT";

  return (
    <LayoutForm title={title}>
      <Title>{title}</Title>
      <div>프로젝트 소개</div>
    </LayoutForm>
  );
}

const Title = styled.h2`
  font-size: 32px;
`;
