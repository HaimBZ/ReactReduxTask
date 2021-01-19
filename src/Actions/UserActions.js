export const getUsers = (users) => {
  return {
    type: "GET_USERS",
    users
  };
};

export const addUser = (userToAdd) => {
  return {
    type: "ADD_USER",
    user: userToAdd
  };
};

export const editUser = (user) => {
  return {
    type: "EDIT_USER",
    user
  };
};

export const deleteUser = (user) => {
  return {
    type: "DELETE_USER",
    user
  };
};
