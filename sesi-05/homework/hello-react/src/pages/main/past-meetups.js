import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';

function PastMeetup() {
  return (
    <Container>
    <Row>
        <Col>
        <h5>Past Meetups</h5></Col>
        <Col md={{ span: 1, offset: 4 }}>
            <h6>
            <a href="#see all">See All</a>
            </h6>
        </Col>
    </Row>
      <Row>
        <Col>
        <CardGroup>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>27 November 2017</Card.Title>
                    <hr />
                    <Card.Text>
                    <p>#39 JakartaJS April Meetup with kumparan</p>
                    <p>139 went</p>
                    </Card.Text>
                    <Button variant="secondary">View</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>27 October 2017</Card.Title>
                    <hr />
                    <Card.Text>
                    <p>#38 JakartaJS April Meetup with BliBli</p>
                    <p>113 went</p>
                    </Card.Text>
                    <Button variant="secondary">View</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>27 September 2017</Card.Title>
                    <hr />
                    <Card.Text>
                    <p>#37 JakartaJS April Meetup with Hacktiv8</p>
                    <p>110 went</p>
                    </Card.Text>
                    <Button variant="secondary">View</Button>
                </Card.Body>
            </Card>
            </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default PastMeetup;