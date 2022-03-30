import styled from "styled-components";

export default function Modal({ closeModal, selectedModal }) {
  return (
    <Container>
      <Wrapper>
        <Close onClick={closeModal}>Close</Close>
        <div>슬라이더</div>
        <div>
          <h2>{selectedModal && selectedModal.name}</h2>
          <p>{selectedModal && selectedModal.name}</p>
        </div>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0 0 0 / 40%);
  z-index: 100;
`;

const Wrapper = styled.div`
  margin: 0 40px;
  background-color: #fff;
  border-radius: 10px;
  height: 100%;
`;

const Close = styled.button`
  position: absolute;
  right: 40px;
`;
