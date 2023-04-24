import styled from "styled-components";

export const Nav = styled.div`
  padding: 1rem 3rem;
  font-size: 20px;
  background-color: #DCD6F7;
  border-bottom:1px solid #424874;

  .logo {
    font-weight: 700;
    font-family: 'Montserrat', cursive;
    font-size: 40px;
    color: #424874;
    text-shadow: 2px 2px 2px #e5e7eb;
  }

  .btn {
    border: 1px solid #424874;
    color: #424874;
    background-color: white;
    border-radius: 20px;
    font-size: 18px;
    height: fit-content;
    cursor: pointer;
    &:hover {
      background-color: #424874;
      color: white;
    }
  }
  .get-user-btn {
    vertical-align: middle;
    padding: 5px 12px;
    margin-top: 10px;
  }
`;