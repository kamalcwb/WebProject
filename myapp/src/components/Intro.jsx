import React from 'react'
import styled from 'styled-components'
import Woman from '../img/woman.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    height: calc (100vh - 50px);
    display: flex;
    padding: 20px;
`
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    aling-items: center;
    jutify-content: center;
`

const Title = styled.h1`
    font-size: 60px;
    width: 60%;
`

const Desc = styled.p`
    width: 60%;
    font-size: 20px;
`

const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    aling-items: center;
`

const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
`

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`

const Tel = styled.span`
    color: #f0667d;
    font-weight: bold;
`

const Contactext = styled.span`
    color: gray;
    marging-top: 5px
`

const Right = styled.div`
    width: 40%;
`

const Image = styled.img`
    width: 100%;
`

const intro = () => {
    return (
        <Container>
            <Left>
                <Title>Aventuras na idade criativa</Title>
                <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam exercitationem quisquam, soluta repudiandae
                    molestiae nihil eos
                    assumenda vero quibusdam illo a ipsum aspernatur itaque provident aperiam enim non deleniti!
                    Dignissimos!</Desc>
                <Info>
                    <Button>Começe um Projeto</Button>
                    <Contact>
                        <Tel>+55 16 9999-9999</Tel>
                        <Contactext>Perguntas e sujestões</Contactext>
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