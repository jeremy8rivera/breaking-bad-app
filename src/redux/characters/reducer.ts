import { CharacterAction, GetCharacterResponse } from "./typings";

export interface CharacterState {
    isLoading: boolean
    characterList: GetCharacterResponse[]
    error?: Error
}

export const initialState: CharacterState = {
    isLoading: false,
    characterList: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(
    state = initialState,
    action: CharacterAction
) {
    switch(action.type) {
        case 'GET_CHARACTER_LIST': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'GET_CHARACTER_LIST_FULFILLED': {
            return {
                ...state,
                isLoading: false,
                characterList: action.payload
            }
        }
        case 'GET_CHARACTER_LIST_FAILED': {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }
        default:
            return state
    }
}