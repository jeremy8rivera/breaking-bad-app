import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { RootState } from "../store"
import {Action} from 'redux'

export interface GetCharacterResponse {
    id: number
    name: string
    birthday: string
    occupation: string[]
    img: string
    status: string
    nickname: string
    appearance: number[]
    portrayed: string
    category?: string[]
}

export type CharacterAction = | {
    type: 'GET_CHARACTER_LIST'
}
|{
    type: 'GET_CHARACTER_LIST_FULFILLED'
    payload: GetCharacterResponse[]
}
| {
    type: 'GET_CHARACTER_LIST_FAILED'
    payload: Error
}

export type CharacterThunkAction = ThunkAction<
Promise<CharacterAction>,
RootState,
null,
Action<CharacterAction>
>

export type CharacterThunkDispatch = ThunkDispatch<
RootState,
null,
Action | CharacterAction
>