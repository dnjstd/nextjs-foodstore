import Link from "next/link";
import styled from "styled-components";

export default function Modal({ closeModal, selectedModal }) {
  return (
    <Container>
      <Wrapper>
        <Close onClick={closeModal}>
          <i className="bi bi-x-lg"></i>
        </Close>
        <img src={selectedModal.image} />
        <InnerRight>
          <h2>{selectedModal && selectedModal.name}</h2>
          <p>{selectedModal && selectedModal.description}</p>
          <div class="url">
            {selectedModal.url ? (
              <Link href={selectedModal && selectedModal.url}>
                <a>{selectedModal && selectedModal.url}</a>
              </Link>
            ) : null}
          </div>
        </InnerRight>
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
  display: flex;
  height: 100%;
  margin: 0 40px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  font-size: 14px;

  img {
    width: 50%;
    height: 100%;
    border-radius: 0;
  }
`;

const Close = styled.button`
  position: absolute;
  top: 20px;
  right: 60px;
  padding: 16px;
  border: none;
  border-radius: 4px;
  background: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background: black;
    transition: 1s;
    i {
      color: #fff;
    }
  }

  i {
    font-size: 20px;
  }
`;

const InnerRight = styled.div`
  padding: 80px;

  .url {
    font-size: 12px;
    font-weight: 800;
  }
`;
