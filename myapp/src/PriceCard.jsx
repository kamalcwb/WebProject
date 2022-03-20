import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-right: 50px;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    background-color: white;
    border-radius: 10px;
    display: flex;
    display-direction: column;
    align-items: center;
`

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`

const Price = styled.span`
    font-weight: bold;
    font-size: 50px;
`

const Type = styled.button`
    padding: 10px;
    magin: 10px 0;
    border: 1.5px solid crimson;
    background-color: white;
    color: crimson;
    border-radius: 20px
`

const List = styled.ul`
    list-style: none;
`

const ListItem = styled.li`
    magin: 30px 0;
`

const Button = styled.button`
    border: none;
    background-color: darkblue;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
`

const PriceCard = ({ price, type }) => {
    return (
        <Container>
            <PriceContainer>
                R$<Price>{price}</Price>/Mês
            </PriceContainer>
            <Type>{type}</Type>
            <List>
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
                <ListItem>Item 3</ListItem>
                <ListItem>Item 4</ListItem>
            </List>
            <Button>Contrate Agora</Button>
        </Container>
    )
}

export default PriceCard