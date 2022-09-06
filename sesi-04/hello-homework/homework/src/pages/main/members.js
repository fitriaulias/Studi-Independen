import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Members() {
  return (
    <Container>
    <Row>
        <Col md={4}>Members</Col>
        <Col md={{ span: 4, offset: 4 }}>
            See All
        </Col>
    </Row>
      <Row>
        <Col>
            <Card className='backgroundLarge'>
            <Card.Body>
                <Card.Title>Organizers</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Adhy Wiranata</Card.Subtitle>
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