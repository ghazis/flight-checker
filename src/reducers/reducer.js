import { initialState } from './states';

export function appState(state = initialState, action) {
    switch (action.type) {
        case 'SET_IS_LOADING':
            return {
                ...state,
                    is_loading: action.is_loading
            }
        case 'SET_FROM_AP_CODE':
            return {
                ...state,
                    from_ap_code: action.from_ap_code
            }
        case 'SET_TO_AP_CODE':
            return {
                ...state,
                    to_ap_code: action.to_ap_code
            }
        case 'SET_DURATION':
            return {
                ...state,
                    duration: action.duration
            }
        case 'SET_MAX_PRICE':
            return {
                ...state,
                    max_price: action.max_price
            }
        case 'SET_START_DATE':
            return {
                ...state,
                    start_date: action.start_date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                    end_date: action.end_date
            }
        case 'SET_RESULTS':
            return {
                ...state,
                    results: action.results
            }
        case 'SET_WINDOW_HEIGHT':
            return {
                ...state,
                    window_height: action.window_height
            }
        case 'SET_WINDOW_WIDTH':
            return {
                ...state,
                    window_width: action.window_width
            }
        default:
            return state;
    }
}