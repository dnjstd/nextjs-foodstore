import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Modal from "../src/component/Modal";

export async function getServerSideProps() {
  const res = await axios.get(`http://localhost:9000/stores`);
  const data = res.data;

  return { props: { data } };
}

export default function Store({ data }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null);

  const openModal = (el) => {
    setSelectedModal(el);
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedModal(null);
    setModalIsOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <main>
      <TitleWrap>
        <h1 className="title">STORE</h1>
        <LineWrap>
          <div className="line"></div>
          <div className="empty"></div>
          <div className="line"></div>
        </LineWrap>
      </TitleWrap>
      <Container>
        <h2>STORE</h2>
        <CardWrapper>
          {data.map((item, idx) => {
            return (
              <img
                src={item.thumb}
                alt={item.name}
                onClick={() => openModal(item)}
                key={idx}
              />
            );
          })}
          {modalIsOpen && (
            <Modal closeModal={closeModal} selectedModal={selectedModal} />
          )}
        </CardWrapper>
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

  h2 {
    font-size: 32px;
  }
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;

  img {
    border-radius: 8px;
    width: 180px;
    height: 180px;
  }
`;
