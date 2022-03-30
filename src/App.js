import './App.css';
import { Container, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './Components/AboutMe';

function App() {
	return (
		<Container>
			<Carousel>
				<div className='carousel-item'>
					<img
						className='d-block w-100'
						src={require('./Malygos.jpeg')}
						alt="Jay's husky, Malygos."
					/>
					<Carousel.Caption>
						<h3>Jay's husky, Malygos!</h3>
						<p>
							Malygos is the sweetest, friendliest boy and loves trips to the
							dog park.
						</p>
					</Carousel.Caption>
				</div>
				<div className='carousel-item'>
					<img
						className='d-block w-100'
						src={require('./Onyxia.jpeg')}
						alt="Jay's tortoiseshell cat, Onyxia."
					/>
					<Carousel.Caption>
						<h3>Jay's tortoiseshell cat, Onyxia!</h3>
						<p>
							Onyxia can be a little Dr Jekyll and Mr Hyde. She's just as likely
							to cuddle you as she is to pounce you!
						</p>
					</Carousel.Caption>
				</div>
			</Carousel>
			<AboutMe />
		</Container>
	);
}

export default App;
