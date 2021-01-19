const INITIAL_STATE = {
  id: null,
  name: "",
  username: "",
  email: "",
  city: "",
  phone: "",
  website: "",
  company: ""
};

export const UserReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...currentState
      };
    case "ADD_USER":
      return {
        ...currentState
      };
    case "EDIT_USER":
      return {
        ...currentState
      };
    case "DELETE_USER":
      return {
        ...currentState
      };
    default:
      return currentState;
  }
};
