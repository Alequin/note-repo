import styled from "styled-components"

import sizes from "common/style/screen-size"

const {mobile} = sizes

const Modal = styled.section`
  display: ${({visible}) => visible ?  "fixed" : "none"};
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 20%;
  width: 90%;
  max-width: 400px;
  height: 300px;
  background-color: white;

  @media (max-width: ${mobile}) {
    top: 0;
    bottom: 0;
    height: 90%;
  }
`

export default Modal
