import { USER_REQUEST, USER_SUCCESS, USER_FAILURE, FINDID} from './actionTypes'

const initialState = {
    users:[],
    error: "",
    id:""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case USER_REQUEST:
            console.log(payload)
            return { ...state }

            case USER_SUCCESS:
            console.log(payload)
            return { ...state, users: payload.data,total_pages: payload.total_pages }

            case USER_FAILURE:
            console.log(payload)
            return { ...state, error: payload }

            case FINDID:
                return {...state, id:payload}
        
        default:
            return { ...state }
    }
}