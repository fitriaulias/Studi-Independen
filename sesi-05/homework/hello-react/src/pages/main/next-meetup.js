import Container from 'react-bootstrap/Container';
import { Col, Row, Card } from 'react-bootstrap';

function NextMeetup() {
  return (
    <Container>
    <Row>
        <Col>
        <h5>Next Meet Up</h5>
        </Col>
    </Row>
      <Row>
        <Col>
            <Card>
            <Card.Body>
                <Card.Title>Awesome meetup and event</Card.Title>
                <hr />
                <Card.Subtitle className="mb-2 text-muted">25 January 2019</Card.Subtitle>
                <Card.Text>
                <p>Hello, JavaScript and Node.js Ninjas!</p>
                <p>Get ready for out monthly meetup JakartaJS! This will be our fifth meetup in 2018!</p>
                <p>This meetup format will contain some short stories and technical talks.
                If you have a short announcement youd like to share with the audience, you may do so during open mic announcement.</p>

                <p>Remember to bring a photo ID to get through building security.</p>
                ----------
                <p>See you there!</p>
                <p>Best, Hengki, Giovanni, Sofian, Riza, Agung TheJakartaJS Organizers</p>
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default NextMeetup;