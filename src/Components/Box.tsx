import styled from "styled-components";

interface Boxprops {
  icon: string;
  heading: string;
  description: string;
}

const Box = ({icon , heading , description}: Boxprops) => {

  return (
    <Container>
      <Container1>
        <Icon style={{backgroundImage:`url(${icon})`}}> </Icon>
        <Title>{heading}</Title>
      </Container1>
      <Container2>{description}</Container2>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 10px;
  background-color: #112949;
  color: white;
  width: 258px;
  height: 206px;
  margin: 15px;
  padding: 0.7rem;
  `;

const Container1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const Icon = styled.div`
  background:  50% 50% no-repeat padding-box;
`;

const Title = styled.div`
  padding: 20px;
  font-size: larger;
  display: flex;
  height: 58px;
  color: #3cc3f2;
  font-family: "Exo 2", sans-serif;
  justify-content: center;
  align-items: center;
`;
const Container2 = styled.div`
  padding: 20px;
  font-family: "Exo 2", sans-serif;
  color: #ffffff;
`;
export default Box;
