import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ProductDetail.module.css';

const ProductDetail = () => {
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();

  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);

  const handleClick = (e) => {
    //장바구니에 추가하는 코드
  };

  return (
    <>
      <div className={styles.category_name}>
        <span>
          {category} > {title}
        </span>
      </div>
      <section className={styles.productFullBox}>
        <div>
          <img className={styles.image} src={image} alt={title}></img>
        </div>

        <div className={styles.infoArea}>
          <div>
            <h2 className={styles.title}>{title}</h2>
          </div>

          <div>
            <div className={styles.description_title}>[제품 설명]</div>
            <div>{description}</div>
          </div>

          <div className={styles.price_box}>
            <table>
              <tbody>
                <tr>
                  <th scope="row">
                    <span>판매가</span>
                  </th>
                  <td scope="row">₩{price}</td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>적립금</span>
                  </th>
                  <td scope="row">₩{price * 0.02} (2%)</td>
                </tr>
                <tr>
                  <th scope="row">
                    <span>배송비</span>
                  </th>
                  <td scope="row">₩2500 (10,0000원 이상 구매 시 무료)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <table className={styles.option_table}>
            <tbody>
              <tr>
                <th scope="row">
                  <span className={styles.option_box}>
                    <label htmlFor="select">옵션: </label>
                    <select
                      id="select"
                      className={styles.select_box}
                      onChange={handleSelect}
                      value={selected}
                    >
                      {options &&
                        options.map((option, index) => (
                          <option key={index}>{option}</option>
                        ))}
                    </select>
                  </span>
                </th>
              </tr>
            </tbody>
          </table>
          <div className={`${styles.button_box} `}>
            <button
              className={`${styles.button_box1} ${styles.btn}  ${styles['btn-hover']} ${styles['color-2']} `}
            >
              바로 구매하기
            </button>
            <button
              className={`${styles.button_box2} ${styles.btn}  ${styles['btn-hover']} ${styles['color-2']} `}
            >
              장바구니 담기
            </button>
            <button
              onClick={handleClick}
              className={`${styles.button_box3} ${styles.btn}  ${styles['btn-hover']} ${styles['color-2']} `}
            >
              장바구니로 이동
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
