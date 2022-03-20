import React from 'react'
import styled from 'styled-components'
import PriceCard from '../PriceCard'

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Price = () => {
    return (
        <Container>
            <PriceCard price="10" type="Básico" />
            <PriceCard price="25" type="Master" />
            <PriceCard price="40" type="Familia" />
        </Container>
    )
}

export default Price