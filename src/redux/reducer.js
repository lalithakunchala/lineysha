import {FILTER,ADD_REQUEST,ADD_SUCCESS,ADD_FAILURE,FETCH_ITEM_REQUEST,FETCH_ITEM_SUCCESS,FETCH_ITEM_FAILURE,FETCH_ADMIN_ITEM_REQUEST,FETCH_ADMIN_ITEM_SUCCESS,FETCH_ADMIN_ITEM_FAILURE,UPDATE_REQUEST,UPDATE_SUCCESS,UPDATE_FAILURE,DELETE_REQUEST,DELETE_SUCCESS,DELETE_FAILURE} from './actionTypes'

const initialState = {
    users:[]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case USERS:
            console.log(payload)
            return { ...state, users: payload }

        
        default:
            return { ...state }
    }
}