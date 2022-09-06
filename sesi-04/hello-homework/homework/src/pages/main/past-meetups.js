import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function PastMeetup() {
  return (
    <Container>
    <Row>
        <Col md={4}>Past Meetups</Col>
        <Col md={{ span: 4, offset: 4 }}>
            See All
        </Col>
    </Row>
      <Row>
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>27 November 2017</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    #39 JakartaJS April Meetup with kumparan
                    139 went
                    </Card.Text>
                    <Button variant="secondary">View</Button>{' '}
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>27 October 2017</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    #38 JakartaJS April Meetup with BliBli
                    113 went
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Button variant="secondary">View</Button>{' '}
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>27 September 2017</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    #37 JakartaJS April Meetup with Hacktiv8
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Button variant="secondary">View</Button>{' '}
                </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PastMeetup;