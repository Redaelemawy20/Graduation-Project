import styled from "styled-components";

export default styled.div`
.content h3,
  h4 {
    color: #1e293b;
    display:flex;
  }
  
  .text {
    margin: 1rem;
    background-color: #eee;
    color: #808080;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  a {
    text-decoration: none;
  }
  a:hover{
    opacity:.6 ;
  }
  .Email {
    color: #f6852b;
    font-weight: 500;
    font-size: 1rem;
  }
  .small {
    font-size: 0.95rem;
    margin-top:3px ;
  }
  .instruction {
    margin: 2rem 1rem;
  }
  
  /**h4 in footer change his color**/
  /* .hruZCa h4 {
    color:#ffffff ;
  } */
  @media (max-width: 480px) {
    .instruction {
      margin: 2rem 0;
    }
    .text {
      margin: 1rem 0;
    }
  }
`;
