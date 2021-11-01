import styled from "styled-components";
import { Link } from "gatsby";

// export const Button = styled(Link)`
//   background: ${({primary}) => (primary ? "#F26A2E" : "#077BF1")};
//   white-space: nowrap;
//   padding: ${({big}) => (big ? "16px 40px" : "10px 32px")};
//   color: white;
//   font-size: ${({big}) => (big ? "20px" : "16px")};
//   outline: none;
//   border: none;
//   min-width: 100px;
//   cursor: pointer;
//   text-decoration: none;
//   transition: 0.3s !important;
//   border-radius: ${({round}) => (round ? "50px" : "none")};

//   &:hover {
//     background: ${({primary}) => (primary ? "#077BF1" : "#F26A2E")};
//     transform: translateY(-2px);
//   }
// -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
// -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
// box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
// box-shadow: 0 0 6px 3px rgba(0,0,0,0.2);
// `

export const Button = styled(Link)`
  background: #1d3557;
  white-space: nowrap;
  padding: 16px;
  height: 48px;
  color: white;
  font-size: 16px;
  line-height: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: none;

  &:hover {
    filter: brightness(125%);
  }
`