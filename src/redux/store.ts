import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './rootReducer'


interface WindowWithReduxExtension extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <R>(a: R) => R
}

const configureStore = () => {
    const composeEnchancers = (window as WindowWithReduxExtension).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const enchancers = composeEnchancers(applyMiddleware(thunk))
    return createStore(reducer, {}, enchancers)
}

const store = configureStore()
const rootState = store.getState()
export type RootState = typeof rootState

export default store