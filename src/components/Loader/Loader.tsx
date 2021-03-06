import styled from "styled-components";


const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgb(0 0 0 / 40%);
  z-index: 10;
  top: 0;
`
const LoaderItem = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  border: 8px solid #f3f3f3;
  border-top: 8px solid #0064EB;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 1.5s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const Loader = () => {
    return <LoaderWrapper>
        <LoaderItem></LoaderItem>
    </LoaderWrapper>
}