import css from './ProductCard.module.css';

import { TiShoppingCart } from 'react-icons/ti';

import clsx from 'clsx';
const ProductCard = ({
  title,
  price,
  description,
  hasDiscount = false,
  promotional = false,
  quontity,
}) => {
  // Для вбудованого стиля:
  // const cardStyles = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   border: '1px solid black',
  //   borderRadius: '10px',
  //   padding: '20px 20px',
  // };
  // Для застосування інлайнового стилю потрібно в сам дів вставити <div style={cardStyles}>
  // Для застосування ванільного сss пишимо <div className="card"> та імпортуємо просто import './ProductCard.css'
  // Для додавання класів без бібліотеки класікс:
  // const classes = [css.card, promotional ? css.cardPromotional : ''];
  // <div className={classes.join(' ')}></div>
  return (
    <div
      className={clsx(css.card, {
        [css.cardPromotional]: promotional === true,
      })}
    >
      <img
        className={css.cardImg}
        width="200px"
        src="https://mojo.generalmills.com/api/public/content/GmHhoT5mr0Sue2oMxdyEig_gmi_hi_res_jpeg.jpeg?v=fdaa7c14&t=466b54bb264e48b199fc8e83ef1136b4"
        alt="Taco"
      />
      <h3 className={css.cardTitle}>
        {title} {hasDiscount ? <span>BIG SALE</span> : null}
      </h3>
      <p className={css.cardDiscription}>Left items: {quontity}</p>
      <h4 className={css.cardPrice}>Price: ${price}</h4>
      <p className={css.cardDiscription}>{description}</p>
      <button className={css.cardAddToBtn} type="button">
        <TiShoppingCart />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
