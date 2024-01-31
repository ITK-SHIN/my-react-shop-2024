import styles from './MyCart.module.css';
import { useAuthContext } from '../contexts/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import CartItem from '../components/CartItem';
import PriceCard from '../components/Products/PriceCard';
import { ImPlus } from 'react-icons/im';
import { FaEquals } from 'react-icons/fa';

const SHIPPING = 3000;

const MyCart = () => {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery({
    queryKey: ['carts'],
    queryFn: () => getCart(uid),
  });

  if (isLoading) return <p> 🏃‍♂️ 로딩중 입니다 ... 🏃‍♀️</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    hasProducts &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );

  // 시간 될때 모달로 만들기
  const handleOrderClick = () => {
    alert('정말로 구매하겠습니까?');
  };

  return (
    <>
      <p className={styles.title}>나의 장바구니</p>
      <section className={styles.mycart_box}>
        {!hasProducts && (
          <p className={styles.noCart}>장바구니에 상품이 없습니다.</p>
        )}
        {hasProducts && (
          <>
            <ul>
              {products &&
                products.map((products) => (
                  <CartItem key={products.id} product={products} uid={uid} />
                ))}
            </ul>

            <div className={styles.productCard_box}>
              <PriceCard
                className={styles.productCard_item}
                text="전체상품금액"
                price={totalPrice}
              />
              <ImPlus
                className={`${styles.productCard_icon} ${styles.productCard_item}`}
              />
              <PriceCard
                className={styles.productCard_item}
                text="총 배송비"
                price={SHIPPING}
              />
              <FaEquals
                className={`${styles.productCard_icon} ${styles.productCard_item}`}
              />
              <PriceCard
                className={styles.productCard_item}
                text="주문 금액"
                price={totalPrice + SHIPPING}
              />
              <button
                onClick={handleOrderClick}
                className={`${styles.productCard_item} ${styles.button_box1} ${styles.btn}  ${styles['btn-hover']} ${styles['color-2']} `}
              >
                Marvel Shop 주문하기
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default MyCart;
