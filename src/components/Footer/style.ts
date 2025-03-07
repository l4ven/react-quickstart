import styled from "styled-components";

export const FootCont = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  background-color: #f7f8f9;
  text-align: center;

  /* @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 50px;
  } */
`;

export const InnerBox = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 24px;
`;
