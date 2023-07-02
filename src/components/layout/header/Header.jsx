import { signOut } from "firebase/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../../user/UserSlice";
import { auth } from "../../firebase_config/Firebase";

export const Header = () => {
  const dispatch = useDispatch();

  const handleOnLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser({}));
    });
  };

  return (
    <Navbar expand="md" className="bg-primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">E-com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>

            <Link to="/register" className="nav-link">
              Register
            </Link>

            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/login" className="nav-link" onClick={handleOnLogout}>
              LogOut
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
