import React from 'react'
import styled from 'styled-components'
import App from '../img/app.png'

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    width: 50%;
`

const Image = styled.img`
    width: 80%;
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.span`
    font-size: 70px;
`

const SubTitle = styled.span`
    font-size: 24px;
    font-style: italic;
    color: #333;
    margin-top: 30px;
`

const Desc = styled.span`
    font-size: 20px;
    color: #777;
    margin-top: 30px;
`

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
`

const Feature = () => {
    return (
        <Container>
            <Left><Image src={App} /></Left>
            <Right>
                <Title>
                    <b>Ótimo</b> desing <br />
                    <b>Ótimo</b> para os negócios
                </Title>
                <SubTitle>
                    Nós sabemos que o desing afeta diretamente os negócios,
                </SubTitle>
                <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime illum officiis veritatis odit! Officiis
                    suscipit reprehenderit soluta excepturi eligendi magni dolore amet, maxime tenetur architecto illo libero adipisci,
                    voluptates nobis.</Desc>
                <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime illum officiis veritatis odit! Officiis
                    suscipit reprehenderit soluta excepturi eligendi magni dolore amet, maxime tenetur architecto illo libero adipisci,
                    voluptates nobis.</Desc>
                <Button>Saiba Mais</Button>
            </Right>
        </Container>
    )
}

export default Feature