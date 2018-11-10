import { SET_USERNAME, SET_PROFILE } from "./types";

const setUsername = username => {
  return {
    type: SET_USERNAME,
    payload: username
  };
};

const setProfile = profile => {
  return {
    type: SET_PROFILE,
    payload: profile
  };
};

/* use Redux-thunk */
const fetchProfile = username => dispatch => {
  const uri = `https://api.github.com/users/${username}`;

  fetch(uri)
    .then(response => response.json())
    .then(profile => dispatch(setProfile(profile)));
};

export { setUsername, fetchProfile };
