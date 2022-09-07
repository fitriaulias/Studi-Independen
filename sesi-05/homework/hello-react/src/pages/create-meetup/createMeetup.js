import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";

function CreateMeetup() {
    return (
        <>
        <Container>
            <Row>
                <Col md={12}>
                    <Card>
                        <Card.Body>Form Create Meetup..</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default CreateMeetup;