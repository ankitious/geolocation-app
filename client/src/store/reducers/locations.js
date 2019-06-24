import {
    FETCH_LOCATIONS_FAILURE,
    FETCH_LOCATIONS_SUCCESS,
    UPDATE_LOCATIONS_FAILURE,
    UPDATE_LOCATIONS_SUCCESS
} from "../actions/constants";

const initialState = {
    locations : []
};

export default (state = initialState, action) => {
    const { type, locations, error } = action;
    switch (type) {
        case UPDATE_LOCATIONS_SUCCESS:
            return { ...state, locations  };
        case UPDATE_LOCATIONS_FAILURE:
            return { ...state, error  };
        case FETCH_LOCATIONS_SUCCESS:
            return { ...state, locations  };
        case FETCH_LOCATIONS_FAILURE:
            return { ...state, error  };
        default:
            return state;
    }
}

