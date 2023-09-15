import { signOut } from "firebase/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../../user/UserSlice";
import { auth } from "../../firebase_config/Firebase";
import logo from "../../assets/images/logo.JPG";

export const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleOnLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser({}));
    });
  };

  return (
    <Navbar expand="md" className="header" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} style={{ width: "115px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?.uid ? (
              <>
                <Link to="/" className="nav-link">
                  Dashboard
                </Link>
                <Link to="/login" className="nav-link" onClick={handleOnLogout}>
                  LogOut
                </Link>
              </>
            ) : (
              <Link to="/login" className="nav-link">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
