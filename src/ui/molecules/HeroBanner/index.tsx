import React from 'react'
import styled from "styled-components"
import SearchBar from '../SearchBar'

const MainDiv = styled.div`
width: 100%;
background-color: lightblue;
display: flex;
justify-content: center;
flex-direction: column;
height: 280px;
`

const H1 = styled.h1`
text-align: center;
`

const HeroBanner = () => {
    return (
        <MainDiv>
            <H1>Search Specific Character or Leave Blank for Full List of Breaking Bad Characters</H1>
            <SearchBar />
        </MainDiv>
    )
}

export default HeroBanner