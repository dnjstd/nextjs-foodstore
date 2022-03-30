import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <LogoWrapper>
        <div className="logo">AWESOME FOOD STORE</div>
        <div className="sns">
          <i className="bi bi-facebook" />
          <i className="bi bi-instagram" />
        </div>
      </LogoWrapper>

      <Address>
        <p>서울 특별시 광진구 아차산로 200</p>
      </Address>

      <Info>
        <ul>
          <li>코오롱인더스트리(주)FnC부문 커먼그라운드</li>
          <li>대표이사: 김이박</li>
          <li>법인등록번호: 123-45-67890</li>
          <li>서울특별시 강남구 삼성로 518 (삼성동)</li>
        </ul>
      </Info>

      <Copyright>Copyright © 2022 원소연.</Copyright>
    </Container>
  );
}

const Container = styled.footer`
  margin: 60px 24px 0 24px;
  padding: 24px 0;
  border-top: 10px solid #eee;
  box-sizing: border-box;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: 32px;
    font-weight: 500;
  }

  .sns {
    display: flex;

    i {
      font-size: 32px;
      padding: 10px;
      cursor: pointer;

      &:first-child::before {
        border-left: 2px solid #dee2e6;
        padding-left: 24px;
      }
    }
  }
`;

const Address = styled.div`
  padding: 48px 0 16px 0;
`;

const Info = styled.div`
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;

    li {
      padding: 0 10px;
      border-left: 1px solid #868e96;
      color: #868e96;
    }

    li:first-child {
      border-left: none;
      padding-left: 0;
    }
  }
`;

const Copyright = styled.div`
  padding-top: 60px;
`;
