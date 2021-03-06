import React from "react";
import styled from "styled-components";
import App from "../img/app.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 80%;
  margin-top: 160px;
  margin-left: 25px;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Left><Image src={App} /></Left>
      <Right>
        <Title>
          <b>Ótimo</b> investimento <br />
          <b>Ótimo</b> para os negócios
        </Title>
        <SubTitle>
          Mergulhe no mercado cripto e saiba como investir
        </SubTitle>
        <Desc>Para tirar todas essas dúvidas, a Semana AnyCrypto, realizada em novembro, reuniu especialistas no momento em
          que o valor de mercado total das criptos passava de US$ 2,9 trilhões, de acordo com o site Coin Market Cap.</Desc>
        <Desc>O evento apresentou os conceitos básicos e as regras desse mercado, além de abordar como fazer a gestão sistemática
          desses ativos e a importância da diversificação do portfólio.</Desc>
        <Button>Saiba Mais</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  )
}

export default Feature