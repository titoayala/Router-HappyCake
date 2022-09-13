import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default () => {
    return (
        <Container className="pt-5">
            <h1 className="mb-4">Cuéntanos, ¿en qué te podemos ayudar?</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese Correo electrónico" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="danger" type="submit">Enviar</Button>

            </Form>
        </Container>
    );
};
