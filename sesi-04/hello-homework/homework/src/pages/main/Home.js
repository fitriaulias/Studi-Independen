import Container from 'react-bootstrap/Container';
import Main from './main';
import NextMeetup from './next-meetup';
import AboutMeetup from './about-meetup';
import Members from './members';
import PastMeetup from './past-meetups'

function Home() {
  return (
    <>
    <Container>
        <Main />
        <NextMeetup />
        <AboutMeetup />
        <Members />
        <PastMeetup />
    </Container>
    </>
  );
}

export default Home;