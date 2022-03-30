import './App.css';
import { Container, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './Components/AboutMe';

function App() {
	return (
		<Container>
			<Carousel>
				<Carousel.Item>
					<div className='carousel-caption' id='above'>
						<h3 className='text'>Jay's husky, Malygos!</h3>
					</div>
					<img
						className='d-block w-100'
						src={require('./Malygos.jpeg')}
						alt="Jay's husky, Malygos."
					/>
					<div className='carousel-caption'>
						<p className='text'>
							Malygos is the sweetest, friendliest boy and loves trips to the
							dog park.
						</p>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className='carousel-caption' id='above'>
						<h3 className='text'>Jay's cat, Onyxia!</h3>
					</div>
					<img
						className='d-block w-100'
						src={require('./Onyxia.jpeg')}
						alt="Jay's tortoiseshell cat, Onyxia."
					/>
					<div className='carousel-caption'>
						<p className='text'>
							Onyxia can be a little Dr. Jekyll and Mr. Hyde. She's just as
							likely to cuddle you as she is to pounce you!
						</p>
					</div>
				</Carousel.Item>
			</Carousel>
			<AboutMe />
		</Container>
	);
}

export default App;
