import React from 'react';
import '@styles/Order.scss';
import icon_fechita from '@icons/flechita.svg';
import Image from 'next/image';

const Order = () => {
	return (
		<div className="Order">
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<Image src={icon_fechita} alt="arrow" />
		</div>
	);
}

export default Order;