import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 400px;
  background-color: #eaf6ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4rem auto;
  opacity: 0.9;
  box-shadow: 5px 2px -1px rgb(255, 255, 255);
  border-radius: 8px;
  position: relative;

  animation-name: start;
  animation-duration: 700ms;
  animation-timing-function: ease-in-out;

  @keyframes start {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
    }
  }
`;

export const Timer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 4rem;
  width: 100%;
  font-size: 10rem;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  color: #232528;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 50px;
  font-weight: 500;
  font-size: 1.5rem;
  color: #fff;
  text-transform: uppercase;
  margin: 0 0;
  padding: 12px;
  position: absolute;
  bottom: 60px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #80cbc4;
  border:none!important;
  outline: 0px;

  &:hover {
    background-color: #4db6ac;
  }
`;
export const Reset = styled(Button)`
  bottom: 4px;
  background-color: #ffb74d;

  &:hover {
    background-color: #c88719;
    
  }
`;
