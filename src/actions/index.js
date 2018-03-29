import axios from "axios";
import { FETCH_FLOORS, FETCH_ROOMS } from "../types";

const ROOT_URL = `http://192.168.56.1:9000`;

export function getAllFloorNames() {
  const request = axios.get(`${ROOT_URL}/floors`);
  console.log("Inside action", request);
  return {
    type: FETCH_FLOORS,
    payload: request
  };
}
export function onFloorSelectionChanged(floor) {
  const request = axios.get(`${ROOT_URL}/floors/${floor.id}`);

  // let wholeFloorObj = FloorData.filter(floorObj => floorObj.id === floor.id)[0];
  return {
    type: FETCH_ROOMS,
    payload: request
  };
}
