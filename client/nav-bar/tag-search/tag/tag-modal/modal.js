import React from "react";
import styled from "styled-components"
import sizes from "common/style/screen-size"

const {mobileScreen} = sizes

export default ({visible, header, body}) => {
  return (
    <Modal visible={visible}>
      <ModalContainer>
        <ModalHeader>
          {header()}
        </ModalHeader>
        <Divider/>
        <ModalBody>
          {body()}
        </ModalBody>
      </ModalContainer>
    </Modal>
  )
}

const Modal = styled.section`
  display: ${({visible}) => visible ?  "fixed" : "none"};
  position: absolute;
  margin: auto;
  border-radius: 10px;
  left: 0;
  right: 0;
  top: 20%;
  width: 90%;
  max-width: 400px;
  height: 300px;
  background-color: white;

  @media (max-width: ${mobileScreen}) {
    top: 0;
    bottom: 0;
    height: 90%;
  }
`

const ModalContainer = styled.section`
  width: 100%;
  height: 100%;
`

const ModalHeader = styled.section`
  height: 30%;
  width: 100%;

  @media (max-width: ${mobileScreen}) {
    height: 15%;
  }
`

const Divider = styled.hr`
  margin: 1%;
`

const ModalBody = styled.section`
  height: 65%;
  width: 100%;
  overflow-x: hidden;

  @media (max-width: ${mobileScreen}) {
    height: 77%;
  }
`
