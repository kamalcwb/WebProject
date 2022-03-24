import React from "react";
import styled from "styled-components";
import Woman from '../img/woman.png'
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
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

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tel = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
    width: 100%;
`
const intro = () => {
  return (
    <Container>
      <Left>
        <Title>Investir em cripto transforma sua carteira</Title>
        <Desc>Ethereum, Litecoin, Ripple, Binance coin, Dogecoin. Se você reconheceu esses nomes, sabe que o mundo das
          criptomoedas já foi muito além do Bitcoin.
          O investimento em moedas digitais tem crescido no Brasil. Dados do Banco Central mostram que os brasileiros haviam
          comprado mais de US$ 4,6 bilhões em criptomoedas somente de janeiro a setembro de 2021.
          Mas afinal, o que são criptomoedas? Como começar a negociá-las e quais os riscos e oportunidades que elas apresentam
          para o investidor?
        </Desc>
        <Info>
          <Button>Saiba Mais</Button>
          <Contact>
            <Tel>+55 16 9999-9999</Tel>
            <ContactText>Perguntas e sujestões</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Woman} />
      </Right>
      <AnimatedShapes />
    </Container>
  )
}

export default intro