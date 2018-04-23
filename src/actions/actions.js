export function setIsLoading(is_loading) {
    return {
        type: 'SET_IS_LOADING',
        is_loading: is_loading
    };
}

export function setFromApCode(from_ap_code) {
    return {
        type: 'SET_FROM_AP_CODE',
        from_ap_code: from_ap_code
    };
}

export function setToApCode(to_ap_code) {
    return {
        type: 'SET_TO_AP_CODE',
        to_ap_code: to_ap_code
    };
}

export function setDuration(duration) {
    return {
        type: 'SET_DURATION',
        duration: duration
    };
}

export function setMaxPrice(max_price) {
    return {
        type: 'SET_MAX_PRICE',
        max_price: max_price
    };
}

export function setStartDate(start_date) {
    return {
        type: 'SET_START_DATE',
        start_date: start_date
    };
}

export function setEndDate(end_date) {
    return {
        type: 'SET_END_DATE',
        end_date: end_date
    };
}

export function setResults(results) {
    return {
        type: 'SET_RESULTS',
        results: results
    };
}

export function setWindowHeight(window_height) {
    return {
        type: 'SET_WINDOW_HEIGHT',
        results: window_height
    };
}

export function setWindowWidth(window_width) {
    return {
        type: 'SET_WINDOW_WIDTH',
        results: window_width
    };
}

export function getFlights() {
    return (dispatch, getState) => {
        var appState = getState().appState;
            fetch('http://192.168.0.114:5000/get_flight_info/?start_date='+appState.start_date+'&end_date='+appState.end_date+'&duration='+appState.duration+'&from_ap_code='+appState.from_ap_code+'&to_ap_code='+appState.to_ap_code)
            .then((response) => response.json())
            .then((responseJson) => {
              dispatch(setIsLoading(false));
              dispatch((setResults(responseJson.results)));
            })
            .catch((error) => {
              console.error(error);
        });
    }
}