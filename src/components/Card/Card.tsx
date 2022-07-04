/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import './Card.css'

// type CardProps = {
//     card: any[]
// }

function Card () {
    // const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch("https://my-json-server.typicode.com/aero-frontend/test-task/PRODUCTS_SUCCESS")
        .then((response) => {
            return response.json()
        })
        .then(({ data }) => {
            return console.log('data', data.products)
        })
        .catch((err) => {  
            console.log('err', err);  
        });
    }, [])


    //     .then(
    //       (result) => {
    //         setIsLoaded(true);
    //         setItems(result);
    //       },
    //       (error) => {
    //         setIsLoaded(true);
    //         setError(error);
    //       }
    //     )
    // }, [])
  
    // if (error) {
    //   return <div>Ошибка: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Загрузка...</div>;
    // } else {
    //   return (
    //     <div>(items)</div>

    //    ) 
    // }
}
  

    //     );
    //   }
    // }
    // return(
    //     <>
    //         <div className='card card'>
    //             <div className='card__cardRating cardRating'>
    //                 <Rating value={3} />
    //                 <div>Арт 20835422</div>
    //             </div>
    //             <div className='card__blockImage blockImage'>
    //                 <img className='blockImage__image image' src='Photo.jpeg' />
    //             </div>
    //             <ol>
    //                 <li className='card__availability availability'> В наличии</li>
    //             </ol>
    //             <div className='card__nameOfProduct nameOfProduct'>Canon PowerShot SX400 IS с улучшенной матрицей и объективом</div>
    //             <div className='card__descriptionOfProduct descriptionOfProduct'>
    //                 <span className='descriptionOfProduct__options options'>Физический размер</span>
    //                 <span className='descriptionOfProduct__meaning meaning'> 232 ✖️ 152 мм</span>
    //             </div>
    //             <div className='card__descriptionOfProduct descriptionOfProduct'>
    //                 <span className='descriptionOfProduct__options options'>Диафрагма</span>
    //                 <span className='descriptionOfProduct__meaning meaning'> OMOG</span>
    //             </div>
    //             <div className='card__descriptionOfProduct descriptionOfProduct'>
    //                 <span className='descriptionOfProduct__options options'>Формат записи</span>
    //                 <span className='descriptionOfProduct__meaning meaning'> RAW, JPEG, MP4 и другие</span>
    //             </div>
    //             <div className='card__descriptionOfProduct descriptionOfProduct'>
    //                 <span className='descriptionOfProduct__options options'>Фокусное расстояние</span>
    //                 <span className='descriptionOfProduct__meaning meaning'> 15-55 мм</span>
    //             </div>
    //             <div className='card__price price'>49 999 руб.</div>
    //             <div className='card__bonuse bonuse'>+400 бонусов</div>
    //             <div className='footer footer'>
    //                 <button className='footer__button button'>
    //                     <div className='button__content content'>
    //                         <AddShoppingCartIcon />
    //                         <div className='content__text text'>Купить</div>
    //                     </div>
    //                 </button>
    //                 <FavoriteBorderIcon className='footer__icon icon' color="primary" />
    //             </div>
    //         </div>
    //     </>
    // )


export default Card;


