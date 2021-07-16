import requestBuilder from "../../services/requestBuilder";
import { CharacterAction, CharacterThunkAction, CharacterThunkDispatch, GetCharacterResponse } from "./typings";

export const getCharacterListFulfilled = (payload: GetCharacterResponse[]): CharacterAction => {
    return { type: 'GET_CHARACTER_LIST_FULFILLED', payload}
}

export const getCharacterListFailed = (payload: Error): CharacterAction => {
    return {type: 'GET_CHARACTER_LIST_FAILED', payload}
}

export const getCharacterList = (search?: string): CharacterThunkAction => async (
    dispatch: CharacterThunkDispatch
): Promise<CharacterAction> => {
    try {
        dispatch({ type: 'GET_CHARACTER_LIST'})
        const {data} = await requestBuilder.get(`/characters${search && `?name=${search.replaceAll(' ', '+')}`}`)
        return dispatch(getCharacterListFulfilled(data))
    }
    catch(error) {
        console.log(error)
        return dispatch(getCharacterListFailed(error))
    }
}