import { Container } from "react-bootstrap";
import Contacto from "../components/Contacto";

export default () => {
    return (
        <Container className="pt-5 contacto">
            <h1 className="mb-4">Cuéntanos, ¿en qué te podemos ayudar?</h1>
            <Contacto />
        </Container>
    );
};
