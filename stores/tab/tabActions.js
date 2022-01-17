export const SET_MODAL = 'SET_TRADE_MODAL'


// visiblity Success
export const setVisiblitySuccess = (isVisible) => ({
    type : SET_MODAL,
    payload: {isVisible}
})


// Modal 
export function setTradeModal(isVisible) {
    return dispatch => {
        dispatch(setVisiblitySuccess(isVisible))
    }
}