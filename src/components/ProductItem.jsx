import React, {useContext}  from 'react';
import AppContext from '@context/AppContext';
import bt_add_to_cart from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';
import Image from 'next/image';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleAddToCart =  item => {
		addToCart(item);
	};

	return (
		<div className={styles.ProductItem}>
			<Image 
			loader={() => product.images[0]}
			src={product.images[0]}
			alt={product.title}
			width={100}
			height={100}
			/>
			<div className={styles["product-info"]}>
				<div>
					<p>{product.price}$</p>
					{product.title}
				</div>
				<figure onClick={() => handleAddToCart(product)} >
					<Image src={bt_add_to_cart} alt="add_cart" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;