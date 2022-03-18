import React, { useState } from 'react'
import styled from 'styled-components'
import How from '../img/how.png'
import MiniCard from './MiniCard'
import Play from '../img/play.png'

const Container = styled.div`
    display: flex;
    height: 100%;
`

const Left = styled.div`
    width: 50%;
    position: relative;
`

const Image = styled.img`
    display: ${(props) => props.open && "none"};
    height: 100%;
    margin-left: 170px;
`

const Video = styled.video`
    display: ${(props) => !props.open && "none"};
    height: 300px;
    positon: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
`

const Right = styled.div`
    width: 50%;
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`

`

const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px
    color: #555;
`

const CardComponent = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: space-between;
`

const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-size: 17px;
    padding: 15px;
    margin-top: 50px;
    cursor: pointer;
    display: flex;
    aling-items: center;
`

const Icon = styled.img`
    width: 20px;
    margin-right: 10px;
`

const Service = () => {
    const [open, setOpen] = useState(false);
    return (
        <Container>
            <Left>
                <Image open={open} src={How} />
                <Video
                    open={open}
                    autoPlay
                    loop
                    controls
                    src='<iframe width="560" height="315" 
                src="https://www.youtube.com/embed/GfJCXEyJFNY" title="YouTube video player" frameborder="0" allow="
                accelerometer; 
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Fácil para começar</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae minima recusandae repellendus enim
                        earum ea est maiores aliquam, eveniet minus neque? Delectus consectetur iste quis vel pariatur ratione
                        itaque officia?</Desc>
                    <CardComponent>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardComponent>
                    <Button onClick={() => setOpen(true)}><Icon src={Play} />Como Funciona</Button>
                </Wrapper>
            </Right>
        </Container>
    )
}

export default Service