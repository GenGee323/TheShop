import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background:#407BAD;
    font-family: Arial, Helvetica, sans-serif;
    text-align:center
  }
  button{
      background:#4F93DE;
      font-family: Arial, Helvetica, sans-serif;
      font-weight:bold;
      padding:1em 6em 1em 6em;
      color:white;
  }
  nav{
    color:#30627C;
  }
  ul{
    display: inline-block; justify-content:space-between;
  }

  header{
      font-family: Arial, Helvetica, sans-serif;  
      font-weight:bold;
      color:#E3F2F2;
      justify-content:space-between;display: inline-block;
  }

  input{
     font-family: Arial, Helvetica, sans-serif;
     font-size: 12px;
     padding:2em;
  }

  h1{
      color: #30627C;
  }

  div{
    background-color: white;
    border-color:#8AAAB7;
  }

  h4{
    color: orange;
  }

  h5{
    color: purple;
  }

  p{
    color: #30627c;
    font-weight: bold;
    text-align:inline;
  }

  link{
    color: blue;
    display: inline-block;
    justify-content:space-between;
  }
section{
    background-color:white;
}
nav{
    color: blue;
    display: inline-block;
    justify-content:space-between;
}
  article{
    size:50%;
    border: solid #E3F2F2 10px ;
  }
`;
 
export default GlobalStyle;