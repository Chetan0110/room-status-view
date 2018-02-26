import axios from "axios";
import { FETCH_COMMENTS } from "../types";

const ROOT_URL = `http://192.168.0.17:9000`;

export function fetchAllComments() {
  const request = axios.get(`${ROOT_URL}/comments`);

  return {
    type: FETCH_COMMENTS,
    payload: request
  };
}

export function addComment(replyComment) {
  const request = axios.post(`${ROOT_URL}/comments`, replyComment);
  return {
    type: FETCH_COMMENTS,
    payload: request
  };
}

export function deleteComment(commentId) {
  const request = axios.delete(`${ROOT_URL}/comments/${commentId}`);
  return {
    type: FETCH_COMMENTS,
    payload: request
  };
}
