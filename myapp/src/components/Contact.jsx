import React from 'react'
import styled from 'styled-components'
import Map from '../img/map.png'
import Phone from '../img/phone.png'
import Send from '../img/send.png'

const Container = styled.div`
    height: 90%;
    background: url("");
`

const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const FormContainer = styled.div`
    width: 50%;
`

const Title = styled.h1`
    margin: 50px;
    margin-top: 0;
`

const Form = styled.form`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    magin-right: 20px;
`

const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Input = styled.input`
    width: 200px;
    padding: 20px;
`

const TextArea = styled.textarea`
    width: 200px;
    heigh: 60%;
    padding: 20px;
`

const Button = styled.button`
    border: none;
    padding: 15px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
`

const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const AdressItem = styled.div`
    display: flex;
    align-items: center;
    margin-botton: 50px;

`

const Icon = styled.img`
    width: 20px;
    margin-right: 20px;
`

const Text = styled.span`
    font-size: 20px;
    margin-right: 15px;
`

const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title>Perguntas? <br /> Vamos Entrar em Contato</Title>
                    <Form>
                        <LeftForm>
                            <Input placeholder='Seu nome' />
                            <Input placeholder='Seu e-mail' />
                            <Input placeholder='Assunto' />
                        </LeftForm>
                        <RightForm>
                            <TextArea placeholder="Digite sua mensagem aqui" />
                            <Button>Enviar</Button>
                        </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AdressItem>
                        <Icon src={Map} />
                        <Text>Avenida Presidente Vargas. 2022 - Franca-SP</Text>
                        <Icon src={Phone} />
                        <Text>+ 55 16 3723- 3333</Text>
                        <Text>+ 55 16 3722- 3232</Text>
                        <Icon src={Send} />
                        <Text>contato@gmail.com</Text>
                        <Text>contato2@gmail.com</Text>
                    </AdressItem>
                </AddressContainer>
            </Wrapper>
        </Container >
    )
}

export default Contact