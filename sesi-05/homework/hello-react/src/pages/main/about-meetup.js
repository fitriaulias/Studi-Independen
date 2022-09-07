import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function AboutMeetup() {
  return (
    <Container>
    <Row>
        <Col>
        <h5>About Meetup</h5>
        </Col>
    </Row>
      <Row>
        <Col>
            <Card>
                <Card.Body>
                Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta area.
                </Card.Body>
            </Card>
        
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMeetup;