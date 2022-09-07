import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Members() {
  return (
    <Container>
    <Row>
        <Col>
        <h5>Members</h5>
        </Col>
        <Col md={{ span: 1, offset: 4 }}>
            <h6>
            <a href="#see all">See All</a>
            </h6>
        </Col>
    </Row>
      <Row>
        <Col>
            <Card className='backgroundLarge'>
            <Card.Body>
                <Card.Title>Organizers</Card.Title>
                <hr />
                <p>Adhy Wiranata</p>
                <Card.Text>
                4 Others
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Members;