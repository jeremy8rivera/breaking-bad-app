import { shallowEqual, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "./redux/store";
import CharacterCard from "./ui/molecules/CharacterCard/CharacterCard";
import HeroBanner from "./ui/molecules/HeroBanner"


const CardList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const AlignCenter = styled.p`
text-align: center;
`

const App = () => {
  const {isLoading, characterList} = useSelector((state: RootState) => ({
    characterList: state.characters.characterList,
    isLoading: state.characters.isLoading,
  }), shallowEqual)

  return (
    <div>
     <HeroBanner />
     <AlignCenter>Character List</AlignCenter>
     {isLoading ? <AlignCenter>Give us a second...</AlignCenter> : 
     <CardList>
      {
      characterList.map(character => (
         <CharacterCard character={character} />
       ))
      }
     </CardList>
     }
    </div>
  );
};

export default App;
