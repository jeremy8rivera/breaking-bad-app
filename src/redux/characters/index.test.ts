import thunk from "redux-thunk"
import configureStore from 'redux-mock-store'
import axios from '../../services/requestBuilder'
import { getCharacterList, getCharacterListFailed } from "./actions"
import reducer, { CharacterState, initialState } from "./reducer"
import { CharacterAction, CharacterThunkDispatch } from "./typings"

const mockError = new Error()
const mockPayload = [{
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
}]

const characterState: CharacterState = {
    isLoading: true,
    characterList: []
}

describe('Character Actions', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {})

    const mockStore = configureStore([thunk])
    const store = mockStore({
        characters: initialState
    })

    beforeEach(() => {
        store.clearActions()
    })

    it('Create Actions for Characters fulfilled', async () => {
        const expectedActions: CharacterAction[] = [
            {type: 'GET_CHARACTER_LIST'},
            {type: 'GET_CHARACTER_LIST_FULFILLED', payload: mockPayload},
        ]

        jest.spyOn(axios, 'get').mockResolvedValue({data: mockPayload})

        await (store.dispatch as CharacterThunkDispatch)(getCharacterList())

        expect(store.getActions()).toEqual(expectedActions)
    })

    it('Create Action to load Error', () => {
        const expectedAction: CharacterAction = {
            type: 'GET_CHARACTER_LIST_FAILED',
            payload: mockError
        }

        expect(getCharacterListFailed(mockError)).toEqual(expectedAction)
    })
})

describe('Character Reducer', () => {
    it('GET_CHARACTER_LIST', () => {
        expect(
            reducer(characterState, {
                type: 'GET_CHARACTER_LIST'
            })
        ).toEqual(characterState)
    })

    it('GET_CHARACTER_LIST_FULFILLED', () => {
        expect(
            reducer(characterState, {
                type: 'GET_CHARACTER_LIST_FULFILLED',
                payload: mockPayload
            })
        ).toEqual({...initialState, characterList: mockPayload})
    })

    it('GET_CHARACTER_LIST_FAILED', () => {
        expect(
            reducer(characterState, {
                type: 'GET_CHARACTER_LIST_FAILED',
                payload: mockError
            })
        ).toEqual({...initialState, error: mockError})
    })
})