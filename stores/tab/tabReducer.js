import * as tabActionTypes from './tabActions'

const initialState = {
    isTradeModalVisible: false
}

const tabReducer = (state = initialState, action) => {
    switch(action.type) {
        case tabActionTypes.SET_MODAL:
            return {
                ...state,
                isTradeModalVisible: action.payload.isVisible
            }
        default:
            return state
    }
}

export default tabReducer;