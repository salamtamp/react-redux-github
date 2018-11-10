import { SET_USERNAME, SET_PROFILE } from "../actions/types";

const initialState = {
  username: "",
  profile: {}
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME: {
      const username = action.payload;
      return { ...state, username };
    }
    case SET_PROFILE: {
      const profile = action.payload;
      return { ...state, profile };
    }
    default: {
      return state;
    }
  }
};

export default profileReducer;
