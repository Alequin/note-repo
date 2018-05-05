import React from "react";
import styled from "styled-components"
import Modal from "./modal"
import Cross from "common/components/cross"

const TagModal = ({visible}) => {
  return (
    <Modal visible={visible}>
      <CrossContainer>
        <Cross />
      </CrossContainer>
    </Modal>
  )
}

const CrossContainer = styled.div`
  width: 100%;
  text-align: right;
`

export default TagModal
