import styled from "styled-components";

export default function Section({
  title,
  description,
  leftButton,
  rightButton,
  backgroundImg
}) {
  return (
    <Wrap bgImg={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftButton}</LeftButton>
          {
            rightButton && (
              <RightButton>{rightButton}</RightButton>
            )
          }
          {/* <RightButton>{rightButton}</RightButton> */}
        </ButtonGroup>
        <DownArrow src='images/down-arrow.svg'/>
      </Buttons>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image:${props=>`url("images/${props.bgImg}")`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
margin-bottom:30px
`;

const LeftButton = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  opacity: 0.85;
  color: white;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  @media (max-width:768px){
  flex-direction: column;
  }
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity:0.65;
  color: black;
  border:none;
`;
const Buttons = styled.div``;

const DownArrow = styled.img`
//   margin-top:20px;
  height:40px;
  overflow-x: hidden;
  animation:animateDown infinite 1.5s;
`;
