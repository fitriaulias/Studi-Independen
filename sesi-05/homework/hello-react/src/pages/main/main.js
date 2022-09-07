import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function Main() {
  return (
    <Container>
      <Row>
        <Col>
            <Card>
            <Card.Body>
                <Card.Text>
                    <Row>
                        <Col>
                        <h4>Hacktiv8 Meet Up</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Location</Col>
                        <Col md={11}>Jakarta, Indonesia</Col>
                    </Row>
                    <Row>
                        <Col>Members</Col>
                        <Col md={11}>1,078</Col>
                    </Row>
                    <Row>
                        <Col>Organizers</Col>
                        <Col md={11}>Adhy Wiranata</Col>
                    </Row>
                    <br/>
                    {/* <Row> */}
                    <Button variant="primary" size="sm">Join Us</Button>
                    {/* </Row> */}
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;