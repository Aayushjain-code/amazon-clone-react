import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className="home">

			<div className="home__container">
				<img
					className="home__image"
					src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg"></img>

				<div className="home__row">
					<Product
						id="12345678"
						title='The Lean Startup psum dolor s ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates  Lorem ivoluptas?'
						price={29.9}
						image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
						rating={5} />

					<Product
						id="12345652"
						title="Bloodline: The master of the unexpected Kindle Edition"
						price={45.9}
						image='https://m.media-amazon.com/images/I/414anwQKqnL._SY346_.jpg'
						rating={3}
					/>
				</div>

				<div className="home__row">
					<Product
						id="12345645"
						title="Harry Potter and the Philosopher's Stone Kindle Edition"
						price={19.9}
						image='https://m.media-amazon.com/images/I/51UoqRAxwEL._SY346_.jpg'
						rating={5} />
					<Product
						id="12347898"
						title="The New Girl: Book 14 - Unforeseen Kindle Edition"
						price={49.9}
						image='https://m.media-amazon.com/images/I/51GmXBIyZOL.jpg'
						rating={4}
					/>
					<Product
						id="36345678"
						title="Harry Potter and the Chamber of Secrets Kindle Edition"
						price={27.9}
						image='https://m.media-amazon.com/images/I/51TA3VfN8RL._SY346_.jpg'
						rating={4}
					/>
				</div>

				<div className="home__row">
					<Product
						id="12348978"
						title="The Science of Self Talk: How to Increase Your Emotional Intelligence and Stop Getting in Your Own Way"
						price={69.9}
						image='https://m.media-amazon.com/images/I/41krKbGge8L.jpg'
						rating={3}
					/>
				</div>

			</div>
		</div>
	)
}

export default Home;
