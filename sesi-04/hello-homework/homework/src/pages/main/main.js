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
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Hacktiv8 Meetup</Card.Title>
                <Card.Text>
                    <Row>
                        <Col>Location</Col>
                        <Col>Jakarta, Indonesia</Col>
                    </Row>
                    <Row>
                        <Col>Members</Col>
                        <Col>1,078</Col>
                    </Row>
                    <Row>
                        <Col>Organizers</Col>
                        <Col>Adhy Wiranata</Col>
                    </Row>
                </Card.Text>
                <Row>
                    <Button variant="secondary">Join Us</Button>{'https://zoom.us/'}
                </Row>
            </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;