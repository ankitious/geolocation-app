import {
    FETCH_LOCATIONS_FAILURE,
    FETCH_LOCATIONS_REQUEST,
    FETCH_LOCATIONS_SUCCESS,
    UPDATE_LOCATIONS_FAILURE,
    UPDATE_LOCATIONS_REQUEST,
    UPDATE_LOCATIONS_SUCCESS
} from "./constants";

export function fetchLocations() {
    return function(dispatch) {
        dispatch({
            type: FETCH_LOCATIONS_REQUEST
        });
        return fetch('http://localhost:5000/api/locations')
            .then(response => response.json().then(body => ({ response, body })))
            .then(({ response, body }) => {
                if (!response.ok) {
                    dispatch({
                        type: FETCH_LOCATIONS_FAILURE,
                        error: body.error
                    });
                } else {
                    dispatch({
                        type: FETCH_LOCATIONS_SUCCESS,
                        locations: body.locations
                    });
                }
            });
    }
}

export function updateLocations(locations) {
    return function(dispatch) {
        dispatch({
            type: UPDATE_LOCATIONS_REQUEST
        });
        return fetch('http://localhost:5000/api/locations',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({locations})
        })
            .then(response => response.json().then(body => ({ response, body })))
            .then(({ response, body }) => {
                if (!response.ok) {
                    dispatch({
                        type: UPDATE_LOCATIONS_FAILURE,
                        error: body.error
                    });
                } else {
                    dispatch({
                        type: UPDATE_LOCATIONS_SUCCESS,
                        locations: body.locations
                    });
                }
            });
    }
}

