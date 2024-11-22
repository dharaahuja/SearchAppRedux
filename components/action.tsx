import { Dispatch } from "redux";
import { SearchResult, fetchSearchResults  as fetchResults} from "./SearchModel";

export const FETCH_SEARCH_REQUEST = 'FETCH_SEARCH_REQUEST';
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const FETCH_SEARCH_FAILURE = 'FETCH_SEARCH_FAILURE';

export interface FetchSearchRequestAction {
    type: typeof FETCH_SEARCH_REQUEST;
}

export interface FetchSearchSuccessAction {
    type: typeof FETCH_SEARCH_SUCCESS;
    payload: SearchResult[];
}

export interface FetchSearchFailureAction {
    type: typeof FETCH_SEARCH_FAILURE;
    payload: string;
}

export type SearchActionTypes = FetchSearchRequestAction | FetchSearchSuccessAction | FetchSearchFailureAction;

export const fetchSearchRequest = (): FetchSearchRequestAction => ({
    type: FETCH_SEARCH_REQUEST,
});

export const fetchSearchSuccess = (results: SearchResult[]): FetchSearchSuccessAction => ({
    type: FETCH_SEARCH_SUCCESS,
    payload: results,
});

export const fetchSearchFailure = (error: string): FetchSearchFailureAction => ({
    type: FETCH_SEARCH_FAILURE,
    payload: error
 });

export function fetchSearchResults(query: string) {
    return async (dispatch: Dispatch<SearchActionTypes>) => {
        dispatch(fetchSearchRequest());
        try {
            const results = await fetchResults(query);
            dispatch(fetchSearchSuccess(results));
        } catch (error) {
             dispatch(fetchSearchFailure('Recieved error'));
        }
    };
}

