import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";

function Login() {
    return (
        <>
        <Container>
            <Row>
                <Col md={12}>
                    <Card>
                        <Card.Body>Form Login..</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Login;