import Home from "./Home";
import styled from "styled-components";
export default function Header() {
  return (
    <Container>
      <a>
        <img src="images/logo.svg" />
      </a>
      <Menu>
        <p>
          <a href="#">Model S</a>
        </p>
        <p>
          <a href="#">Model 3</a>
        </p>
        <p>
          <a href="#">Model X</a>
        </p>
        <p>
          <a href="#">Model Y</a>
        </p>
      </Menu>
    
   <RightMenu>
<p><a href="#">Shop</a></p>
<p><a href="#">Tesla Account</a></p>
   </RightMenu>
    </Container>
  );
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex:1;

a{
font-weight:600px;
text-transform: uppercase;
padding:0px 10px ;
flex-wrap:nowrap;

}
`;

const RightMenu=styled.div`
display:flex;
a{
font-weight:600px;
text-transform: uppercase;
padding:0px 10px ;
flex-wrap:nowrap;


}
`

