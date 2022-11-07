import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
    color: white;
    font-size: 70px;
    font-weight: 500;
    text-align: center;
    margin: 20px;
  }
  .start,
  .next {
    cursor: pointer;
    background-color: white;
    border: 2px solid #7bff4f;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start:hover,
  .next:hover {
    background-color: #7bff4f;
  }
`;
