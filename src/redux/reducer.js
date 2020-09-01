import { USER_REQUEST, USER_SUCCESS, USER_FAILURE} from './actionTypes'

const initialState = {
    users:[],
    error: ""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case USER_REQUEST:
            console.log(payload)
            return { ...state }

            case USER_SUCCESS:
            console.log(payload)
            return { ...state, users: payload.data }

            case USER_FAILURE:
            console.log(payload)
            return { ...state, error: payload }
        
        default:
            return { ...state }
    }
}