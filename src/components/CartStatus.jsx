import { useAuthContext } from '../contexts/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import { SlHandbag } from 'react-icons/sl';
import styles from './CartStatus.module.css';

const CartStatus = () => {
  const { uid } = useAuthContext();
  const { data: products } = useQuery({
    queryKey: ['cart'],
    queryFn: () => getCart(uid),
  });

  return (
    <div className={styles.cart_box}>
      <SlHandbag className={styles.cart} />
      {products && <p className={styles.cart_Number}>{products.length}</p>}
    </div>
  );
};

export default CartStatus;

/* 
<SlHandbag className={styles.cart} />
*/
