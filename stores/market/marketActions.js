import axios from "axios";

// HOLD loading
export const GET_HOLD_BEGIN = "GET_HOLD_BEGIN"
export const GET_HOLD_SUCCESS = "GET_HOLD_SUCCESS"
export const GET_HOLD_FAILURE = "GET_HOLD_FAILURE"

// market loading
export const GET_MARKET_BEGIN = "GET_MARKET_BEGIN"
export const GET_MARKET_SUCCESS = "GET_MARKET_SUCCESS"
export const GET_MARKET_FAILURE = "GET_MARKET_FAILURE"

export const getHoldingsBegin = () => ({
    type: GET_HOLD_BEGIN
})

export const getHoldingsSuccess = (myHoldings) => ({
    type: GET_HOLD_SUCCESS,
    payload: {myHoldings}
})

export const getHoldingsFailure = (error) => ({
    type: GET_HOLD_FAILURE,
    payload: {error}
})

export function getHoldings() {

}