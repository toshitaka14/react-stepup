import styled from "styled-componets"

export const StyledComponents= () =>{
  return( 
  < SContainer>
    <Stitle> -Styled Componets -</Stitle>
    <Sbutton>FIGHT!!</Sbutton>
  </ SContainer >
  );
};

const  SContainer =  styled.div`
border:solid 2px #392eff;
border-radius:20px;
padding:8px;
margin:8px;
display:flex;
justify-content:space-around;
align-items:center;`
const Stitle = styled.p` margin:0;
color:#3d84a8;`
const Sbutton =styled.button`background-color:#adfdd8;
border:none;
padding:8px;
border-radius:8px;
&:hover{
background-color: #46cdcf;
color: #fff;
cursor: pointer;
}`
