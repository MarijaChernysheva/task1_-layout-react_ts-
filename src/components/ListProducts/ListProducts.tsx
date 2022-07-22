import { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import CheckIcon from '@mui/icons-material/Check';

import styles from './ListProducts.module.css';

import Favorites from '../Favorites/Favorites';

type ProductСharacteristic = {
  name: string;
  value: string;
};

type Product = {
  availability: boolean;
  code: number;
  id: number;
  inComparsion: boolean;
  inFav: boolean;
  params: ProductСharacteristic[];
  title: string;
};

type ProductArray = Product[];

const ListProducts = () => {
  const [products, setProducts] = useState<ProductArray>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/${'PRODUCTS_SUCCESS'}`)
      .then((response: Response) => {
        if (response.ok) return response.json();
        else throw new Error(response.statusText);
      })
      .then((data: { data: { products: ProductArray } }) => {
        // console.log(data);
        setProducts(data.data.products);
      })
      .catch((err: string) => {
        console.error('err', err);
      });
  }, []);
  return (
    <>
      {products?.map((product: Product) => (
        <div key={product.id} className={styles.card}>
          <div className={styles.cardRating}>
            <Rating value={3} />
            <div className={styles.article}>Арт. {product.code}</div>
          </div>
          <div className={styles.blockImage}>
            <img className={styles.image} src="Photo.jpeg" />
          </div>
          <span className={styles.availability}>
            <CheckIcon /> В наличии
          </span>
          <div className={styles.nameOfProduct}>{product.title}</div>
          {product.params.map((description: ProductСharacteristic) => (
            <div key={description.value} className={styles.descriptionOfProduct}>
              <span className={styles.options}>{description.name}</span>
              <span className={styles.meaning}>{description.value}</span>
            </div>
          ))}
          <div className={styles.price}>49 999 руб.</div>
          <div className={styles.bonuse}>+400 бонусов</div>
          <div className={styles.footer}>
            <button className={styles.button}>
              <img src="cart.svg" />
              <div className={styles.text}>Купить</div>
            </button>
            <Favorites inFav={product.inFav} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ListProducts;
