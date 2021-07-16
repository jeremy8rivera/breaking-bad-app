import { shallow } from "enzyme"
import { GetCharacterResponse } from "../../../redux/characters/typings"
import CharacterCard from "./CharacterCard"

const mockCharacter: GetCharacterResponse = {
    id: 2,
    name: 'john',
    birthday: '00/00/0000',
    occupation: ['abc'],
    img: 'url',
    status: 'dead',
    nickname: 'nickname',
    appearance: [1],
    portrayed: 'jane',
    category: ['another']
}

describe('Character Card', () => {
    const wrapper = shallow(<CharacterCard character={mockCharacter}/>)
    it('Passes Character Information', () => {
        expect(wrapper.find('[data-test="name"]').text()).toBe('Name: john')
    })
})