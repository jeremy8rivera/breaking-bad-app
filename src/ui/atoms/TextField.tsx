import React, { SyntheticEvent,ReactElement } from "react"
import styled from "styled-components"

interface TextFieldProps {
    className?: string
    onChange: (event: SyntheticEvent<HTMLInputElement>) => void
    value: string
    placeholder: string
}

const TextInput = styled.input`
font-size: 20px;
`

const TextField = ({className, onChange, value, placeholder}:TextFieldProps):ReactElement => (
    <TextInput type="text" value={value} onChange={(e) => onChange(e)} className={className} placeholder={placeholder} />
)

export default TextField