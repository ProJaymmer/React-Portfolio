import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './Components/AboutMe';
import TopNav from './Components/TopNav';

function App() {
	return (
		<Container fluid>
			<TopNav />
			<AboutMe />
		</Container>
	);
}

export default App;
