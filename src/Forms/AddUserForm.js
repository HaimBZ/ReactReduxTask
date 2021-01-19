import React, { useState } from "react";
import { FormGroup, Badge, FormControl, Button } from "react-bootstrap";

const AddUserForm = (props) => {
  const initialFormState = {
    id: null,
    name: "",
    username: "",
    email: "",
    address: "",
    phone: "",
    website: "",
    company: ""
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form>
      <FormGroup>
        <Badge>Name</Badge>
        <FormControl
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Badge>E-mail</Badge>
        <FormControl
          type="text"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Badge>City</Badge>
        <FormControl
          type="text"
          name="city"
          value={user.city}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Badge>Phone</Badge>
        <FormControl
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Badge>Website</Badge>
        <FormControl
          type="text"
          name="website"
          value={user.website}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Badge>company</Badge>
        <FormControl
          type="text"
          name="company"
          value={user.company}
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button
        style={{ marginRight: "1em" }}
        variant="primary"
        onClick={(event) => {
          event.preventDefault();
          if (!user.name) return;

          props.addUser(user);
          setUser(initialFormState);
        }}
      >
        Add user
      </Button>
      <Button onClick={() => props.setAddUserModal(false)} variant="light">
        Cancel
      </Button>
    </form>
  );
};

export default AddUserForm;
