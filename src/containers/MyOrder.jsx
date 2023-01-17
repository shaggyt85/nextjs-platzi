import React, {useContext} from 'react';
import Link from 'next/link';
import OrderItem from '@components/OrderItem';
import icon_flechita from '@icons/flechita.svg';
import AppContext from '@context/AppContext';
import Image from 'next/image';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
	const {state} = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};

	return (
		<aside className={styles.MyOrder}>
			<div className={styles["title-container"]}>
				<Image 
				src={icon_flechita} alt="arrow"
				width={20}
				height={20} />
				<p className={styles.title}>My order</p>
			</div>
			<div className={styles["my-order-content"]}>
				{state.cart.map((product) => (
					<OrderItem  product={product} key={`orderItem-${product.id}`}/>
				))}
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>{sumTotal()}$</p>
				</div>
				<Link className={styles["primary-button"]} href="/checkout">
					Checkout
				</Link>
			</div>
		</aside>
	);
}

export default MyOrder;