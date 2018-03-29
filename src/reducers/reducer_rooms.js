import { FETCH_FLOORS, FETCH_ROOMS } from "../types";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_FLOORS:
            return action.payload.data;
        case FETCH_ROOMS:
            const roomsForFloor = action.payload.data;
            return { ...state, ...roomsForFloor };
        default:
            return state;
    }
}
