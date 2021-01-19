import { connect } from "react-redux";
import * as UserActions from "../Actions/UserActions";
import App from "./../App";

// map state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    //accessed with this.props.mappedAppSate
    mappedProductState: state.userState
  };
};

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(UserActions.getUsers()),
    //accessed with this.props.mappedAppActions
    //fetchProducts: () => dispatch(productActions.fetchProducts()),
    mappedEditUser: (userToEdit) => dispatch(UserActions.editUser(userToEdit)),
    mappedshowEditModal: (userToEdit) =>
      dispatch(UserActions.showEditModal(userToEdit)),
    mappedhideEditModal: () => dispatch(UserActions.hideEditModal()),
    mappedDeleteProduct: (userToDelete) =>
      dispatch(UserActions.deleteUser(userToDelete)),
    mappedshowDeleteModal: (userToDelete) =>
      dispatch(UserActions.showDeleteModal(userToDelete)),
    mappedhideDeleteModal: () => dispatch(UserActions.hideDeleteModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
