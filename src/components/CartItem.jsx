/* eslint-disable react/prop-types */
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { addOrUpdateToCart, removeFromCart } from '../api/firebase';
import styles from './CartItem.module.css';

const CartItem = ({
  product,
  product: { id, image, title, option, quantity, price },
  uid,
}) => {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };

  const handlePlus = () =>
    addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });

  const handleDelete = () => removeFromCart(uid, id);

  return (
    <li className={styles.product_card}>
      <img
        className={`${styles.product_img} ${styles.product_card_item} `}
        src={image}
        alt={title}
      />
      <div className={styles.product_card_item}>
        <p className={styles.product_card_title}>{title}</p>
        <p className={styles.price}>₩{price}</p>
      </div>

      <div className={styles.product_card_item}>
        <p>Size: {option}</p>
      </div>

      <div className={`${styles.icon_box} ${styles.product_card_item}`}>
        <AiOutlineMinusSquare onClick={handleMinus} className={styles.icon} />
        <span className={styles.item_text}>{quantity}</span>
        <AiOutlinePlusSquare onClick={handlePlus} className={styles.icon} />
        <RiDeleteBin5Fill onClick={handleDelete} className={styles.icon} />
      </div>
    </li>
  );
};

export default CartItem;
