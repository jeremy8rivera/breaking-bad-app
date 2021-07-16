import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { GetCharacterResponse } from '../../../redux/characters/typings'

interface CharacterCardProps {
    character: GetCharacterResponse
}

const Card = styled.div`
border: 1px solid black;
width: 240px;
margin: 4px;
padding: 4px;
text-align: center;
`

const Image = styled.div`
width: 60px;
height: 60px;
margin: 0 auto;
img {
    height: 100%;
    width: 100%;
}
`

const CharacterCard = ({character}: CharacterCardProps): ReactElement => (
    <Card>
        <Image>
            <img src={character.img} alt='' />
        </Image>
        <p data-test="name">Name: {character.name}</p>
        <p data-test="nickname">Nickame: {character.nickname}</p>
        <p data-test="status">Status: {character.status}</p>
    </Card>
)

export default CharacterCard