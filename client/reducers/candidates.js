import { INIT_CANDIDATE } from '../actions/candidates'

const initialState = []

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case INIT_CANDIDATE:
            return action.candidate

        default:
            return state
    }
}

export default reducer