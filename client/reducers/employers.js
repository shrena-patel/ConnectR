import { INIT_EMPLOYER } from '../actions/employers'

const initialState = []

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case INIT_EMPLOYER:
            return action.employer

        default:
            return state
    }
}

export default reducer