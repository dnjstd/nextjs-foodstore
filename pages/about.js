import axios from "axios";
import Link from "next/link";
import styled from "styled-components";
import LayoutForm from "../components/LayoutForm";

export async function getStaticProps() {
  const res = await axios.get(`http://localhost:9000/stores`);
  const dataList = res.data;

  return { props: { dataList } };
}

export default function About({ dataList }) {
  const title = "ABOUT";

  return (
    <LayoutForm title={title}>
      <Title>{title}</Title>
      <p>
        전세계 젊은 문화 코드를 가진 FOOD 브랜드들과 국내 인기 매장들이 공존하는
      </p>
      <StoreName>AWESOME FOOD STORE.</StoreName>
      <StoreList>
        {dataList.map((data, idx) => {
          return <div key={idx}>・ {data.name}</div>;
        })}
        매장이 입점되어있습니다.
      </StoreList>

      <LinkWrapper>
        <Link href="https://github.com/dnjstd/purpleio-test">
          <a>💁🏼‍♀️ 프로젝트 github 링크 바로가기</a>
        </Link>
      </LinkWrapper>
    </LayoutForm>
  );
}

const Title = styled.h2`
  font-size: 32px;
`;

const StoreName = styled.h3`
  font-size: 20px;
  color: #464ea3;
`;

const StoreList = styled.div`
  display: flex;
  padding: 16px 0 40px 0;
`;

const LinkWrapper = styled.span`
  background-color: #464ea3;
  color: #fff;
  padding: 4px;
  border-radius: 4px;
`;
