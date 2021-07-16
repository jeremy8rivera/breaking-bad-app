import React, { ReactElement } from "react"
import styled from "styled-components"

interface ButtonProps {
    className?: string
    onClick: () => void
    value: string
}

const InputButton = styled.input`
background-color: #1E92F4;
border: none;
padding: 4px;
font-size: 20px;
color: white;
font-weight: bold;
`

const Button = ({className, onClick, value}: ButtonProps): ReactElement => (
    <InputButton type="button" value={value} onClick={onClick} className={className} />
)

export default Button