import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Modal from "../components/Modal";
import LayoutForm from "../components/LayoutForm";

export async function getServerSideProps() {
  const res = await axios.get(`http://localhost:9000/stores`);
  const dataList = res.data;

  return { props: { dataList } };
}

export default function Store({ dataList }) {
  const title = "STORE";

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
    <LayoutForm title={title}>
      <Title>{title}</Title>
      <CardWrapper>
        {dataList.map((data, idx) => {
          return (
            <img
              src={data.thumb}
              alt={data.name}
              onClick={() => openModal(data)}
              key={idx}
            />
          );
        })}
        {modalIsOpen && (
          <Modal closeModal={closeModal} selectedModal={selectedModal} />
        )}
      </CardWrapper>
    </LayoutForm>
  );
}

const Title = styled.h2`
  font-size: 32px;
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
