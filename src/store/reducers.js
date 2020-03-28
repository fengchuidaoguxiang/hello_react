// 定义reducer
import {combineReducers} from 'redux';
import {LOADING, SUCCESS, ERROR} from './actions-type';


let usersState = {
    usersArr: [],
    firstViem: true,
    loading: false,
    error: null
};

function searchUsersReducer( state=usersState, action ) {
    switch (action.type) {
        case LOADING:
            return {
                usersArr: [],
                firstViem: false,
                loading: true,
                error: null
            };
        case SUCCESS:
            return {
                usersArr: action.data,
                firstViem: false,
                loading: false,
                error: null
            };
        case ERROR:
            return {
                usersArr: [],
                firstViem: false,
                loading: false,
                error: '暂时没有匹配到用户'
            };
        default:
            return state;
    }
}

export default combineReducers({searchUsersReducer})