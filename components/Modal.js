import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Modal({ closeModal, selectedModal }) {
  return (
    <Container>
      <Wrapper>
        <Close onClick={closeModal}>
          <i className="bi bi-x-lg"></i>
        </Close>
        <div className="imageContainer">
          <Image
            src={selectedModal.image}
            alt={selectedModal.name}
            className={"image"}
            layout="fill"
            priority
          />
        </div>

        <InnerRight>
          <h2>{selectedModal.name}</h2>
          <p>{selectedModal.description}</p>
          <div className="url">
            {selectedModal.url && (
              <Link href={selectedModal.url}>
                <a>{selectedModal.url}</a>
              </Link>
            )}
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
  font-size: 14px;
  overflow: hidden;

  .imageContainer {
    width: 50%;
    height: 100%;
    position: relative;

    .image {
      width: 100%;
      height: 100%;
      border-radius: 0;
    }
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

  i {
    font-size: 20px;
  }

  &:hover {
    background: black;
    transition: 1s;

    i {
      color: #fff;
    }
  }
`;

const InnerRight = styled.div`
  width: 50%;
  padding: 80px;
  white-space: pre-wrap;
  line-height: 24px;

  h2 {
    font-size: 32px;
    padding-bottom: 50px;
  }

  .url {
    font-size: 12px;
    font-weight: 800;
  }
`;
