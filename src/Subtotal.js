import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';

function Subtotal() {

	const histort = useHistory();
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							{/* part of homework */}
							Subtotal ({basket.length} items): <strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />This order contains a gift.
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)} //part of homework
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button onClick={e => histort.push('/payment')}>Proceed to Checkout</button>
		</div>
	)
}

export default Subtotal

