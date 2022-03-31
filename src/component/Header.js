import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <Container>
      <HeaderLeft>
        <div className="lang">
          <span>KOREAN</span>
          <img src="https://www.common-ground.co.kr/images/svg/dropdown-arrow.svg" />
        </div>
        <div className="online">ONLINE SHOP</div>
      </HeaderLeft>

      <nav>
        <Menu>
          <li>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
            <ul className="submenu">
              <li>EVENT1</li>
              <li>EVENT2</li>
            </ul>
          </li>
          <li>
            <Link href="/store">
              <a>STORE</a>
            </Link>
          </li>
        </Menu>
      </nav>

      <Logo>
        <Link href="/">
          <a>AWESOME FOOD STORE</a>
        </Link>
      </Logo>
    </Container>
  );
}

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background-color: #fff;

  &:hover .submenu {
    transform: translate(0px, 0%);
    transition: 0.5s ease-in-out;
    opacity: 1;
    visibility: visible;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  font-size: 12px;
  div {
    display: flex;
    align-items: center;
  }

  .lang {
    padding: 12px;

    img {
      width: 18px;
    }
  }

  .online {
    color: #464ea3;
  }
`;

const Menu = styled.ul`
  display: flex;
  font-size: 18px;
  font-weight: 600;

  li {
    padding: 0 46px;
    list-style: none;
  }

  .submenu {
    position: absolute;
    width: 100vw;
    height: 140px;
    left: 0px;
    padding: 24px 200px 0 0;
    text-align: center;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
    transform: translate(0px, -5%);
    opacity: 0;
    visibility: hidden;

    li {
      padding-bottom: 8px;
      color: gray;
    }
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #464ea3;
`;
