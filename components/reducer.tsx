import { SearchActionTypes, FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_FAILURE } from "./action";
import { SearchResult } from "./SearchModel";

export interface SearchState {
    loading: boolean;
    results: SearchResult[];
    error: string | null;
}

const initialState: SearchState = {
    loading: false,
    results: [],
    error: null,
}

export const searchReducer = (state = initialState, action: SearchActionTypes): SearchState => {
    switch (action.type) {
        case FETCH_SEARCH_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                results: action.payload,
                error: null,
            };
        case FETCH_SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};