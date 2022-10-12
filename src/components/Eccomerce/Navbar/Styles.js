import styled from "styled-components";

export const Nav = styled.nav`
  height: 4em;
  background-color: #0064e8;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    width: 90%;
    display: flex;
    list-style: none;
    justify-content: space-between;
  }

  ul li a {
    font-size: 19px;
    color: #fff;
    text-decoration: none;
  }
`;
