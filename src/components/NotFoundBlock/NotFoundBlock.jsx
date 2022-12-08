import React from 'react';
import styles from './NotFoundBlock.module.scss';

console.log(styles)

const NotFoundBlock = () => {
	return (
		<div className={styles.root}>
			<span>😔</span>
			<br />
			<h1>
				Ничего не найдено :C
			</h1>
			<p className={styles.description}>Данной страницы нет в нашем магазине</p>
		</div>
	)
}

export default NotFoundBlock;