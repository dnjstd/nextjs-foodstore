import styled from "styled-components";

export default function About() {
  return (
    <main>
      <TitleWrap>
        <h1 className="title">ABOUT</h1>
        <LineWrap>
          <div className="line"></div>
          <div className="empty"></div>
          <div className="line"></div>
        </LineWrap>
      </TitleWrap>
      <Container>
        <h2>ABOUT</h2>
        <div>프로젝트 소개</div>
      </Container>
    </main>
  );
}

const TitleWrap = styled.div`
  margin-top: 100px;
  padding: 0 28px;

  .title {
    font-size: 32px;
    color: #464ea3;
    flex: 1;
  }
`;

const LineWrap = styled.div`
  display: flex;
  height: 0.4rem;

  .line {
    background-color: #464ea3;
    flex: 1;
    width: 0.75rem;
  }

  .empty {
    width: 0.75rem;
  }
`;

const Container = styled.section`
  max-width: 1024px;
  margin: 100px auto;
  width: 100%;
  height: 200px;

  h2 {
    font-size: 32px;
  }
`;
