import './App.css';
import { Container, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './Components/AboutMe';

function App() {
	return (
		<Container fluid>
			<Carousel className="carousel">
				<Carousel.Item>
					<img
						id='pets'
						className='d-block w-100'
						src={require('./Malygos.jpeg')}
						alt="Jay's husky, Malygos."
					/>
					<Carousel.Caption>
						<h3 className='text'>Jay's husky, Malygos!</h3>
						<p className='text'>
							Malygos is the sweetest, friendliest boy and loves trips to the
							dog park.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						id='pets'
						className='d-block w-100'
						src={require('./Onyxia.jpeg')}
						alt="Jay's tortoiseshell cat, Onyxia."
					/>
					<Carousel.Caption>
						<h3 className='text'>Jay's cat, Onyxia!</h3>
						<p className='text'>
							Onyxia is as likely to cuddle you as she is to pounce you.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<AboutMe />
		</Container>
	);
}

export default App;
