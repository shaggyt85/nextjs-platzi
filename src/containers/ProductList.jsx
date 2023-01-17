import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '../hooks/useGetProducts.js';
const API = 'https://api.escuelajs.co/api/v1/products';
import styles from '@styles/ProductList.module.scss'

	const ProductList = () => {
		const products = useGetProducts(API);
		return (
			<section className={styles["main-container"]}>
				<div className={styles.ProductList}>
					{products.map(product => (
						<ProductItem product={product} key={product.id}/>
					))}
				</div>
			</section>
		);
	};


export default ProductList;