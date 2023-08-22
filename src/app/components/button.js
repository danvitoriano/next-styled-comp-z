"use client"
import styled from 'styled-components';

const Button = styled.button`
width: 319px; height: 216px; position: relative; background: white;
`

export default function MeuBotao(props){
    return (
        <Button>
            {props.name} - {props.sobrenome}
        </Button>
    )
}