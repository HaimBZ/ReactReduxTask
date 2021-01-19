import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import {
  AiOutlineMail,
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineIdcard,
  AiOutlineAliyun
} from "react-icons/ai";

const UserTable = (props) => (
  <Container>
    <div className="grid-container">
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <div className="grid-item" key={user.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://dummyimage.com/600x400/cdcdcd/414ce0&text=user image"
              />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  <div>
                    <AiOutlineMail /> {user.email}
                  </div>
                  <div>
                    <AiOutlineHome /> {user.city}
                  </div>
                  <div>
                    <AiOutlinePhone /> {user.phone}
                  </div>
                  <div>
                    <AiOutlineIdcard /> {user.website}
                  </div>
                  <div>
                    <AiOutlineAliyun /> {user.company}
                  </div>
                </Card.Text>
                <Button
                  style={{ marginRight: "1em" }}
                  onClick={() => {
                    props.editRow(user);
                  }}
                  variant="primary"
                >
                  Edit
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => props.deleteUser(user.id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))
      ) : (
        <div>No users</div>
      )}
    </div>
  </Container>
);

export default UserTable;
