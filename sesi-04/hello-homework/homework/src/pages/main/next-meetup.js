import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function NextMeetup() {
  return (
    <Container>
    <Row>
        <Col md={4}>Next Meetup</Col>
    </Row>
      <Row>
        <Col>
            <Card className='backgroundLarge'>
            <Card.Body>
                <Card.Title>Awesome meetup and event</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">25 January 2019</Card.Subtitle>
                <Card.Text>
                Hello, JavaScript and Node.js Ninjas!
                Get ready for out monthly meetup JakartaJS! This will be our fifth meetup in 2018!
                This meetup format will contain some short stories and technical talks.
                If you have a short announcement you'd like to share with the audience, you may do so during open mic announcement.

                Remember to bring a photo ID to get through building security.
                ----------
                See you there!
                Best, Hengki, Giovanni, Sofian, Riza, Agung TheJakartaJS Organizers
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default NextMeetup;