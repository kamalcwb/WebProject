import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 50px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline crimson;
`;
const Menu = styled.ul`
    display: flex;
    list-style: none;
`
const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: gray;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Agência</Logo>
                    <Menu>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Recursos</MenuItem>
                        <MenuItem>Serviços</MenuItem>
                        <MenuItem>Valores</MenuItem>
                        <MenuItem>Contato</MenuItem>
                    </Menu>
                </Left>
                <span>Button</span>
            </Wrapper>
        </Container>
    )
}

export default Navbar