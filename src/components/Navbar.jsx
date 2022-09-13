import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
    return (
        <>
            <Navbar bg="danger" variant="danger">
                <Container className="justify-content-space-between">
                    <div className="enlaces">
                        <Link to="/" className="text-white ms-3 text-decoration-none">
                            🏠 Home
                        </Link>
                        <Link to="/contacto" className="text-white ms-3 text-decoration-none">
                            📒 Contacto
                        </Link>
                    </div>
                    <Navbar.Brand className="text-white ms-3 text-decoration-none">Happy Cake 🍰</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}