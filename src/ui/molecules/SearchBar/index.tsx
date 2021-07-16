import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getCharacterList } from '../../../redux/characters/actions'
import Button from '../../atoms/Button'
import TextField from '../../atoms/TextField'

const SearchBarDiv = styled.div`
margin: 0 auto;
`

const SearchBar = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(getCharacterList(value))
    }
    return(
        <SearchBarDiv>
        <TextField value={value} onChange={(e) => setValue(e.currentTarget.value)} placeholder="Character Name..."/>
        <Button value="Search" onClick={onClick} />
        </SearchBarDiv>
    )
}

export default SearchBar