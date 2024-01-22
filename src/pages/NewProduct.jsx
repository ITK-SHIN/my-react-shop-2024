import React, { useState } from 'react';
import styles from './NewProduct.module.css';
import Button from '../components/Ui/Button.jsx';
import { uploadImage } from '../api/uploader.js';
import { addNewProduct } from '../api/firebase.js';

const NewProduct = () => {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handleChange = (e) => {
    //e.target이 file인경우, input요소의 files프로퍼티에 fileList객체가 넘어온다.
    const { name, value, files } = e.target;

    if (name === 'file') {
      {
        setFile(files && files[0]);

        return;
      }
    }

    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 제품의 사진을 Cloudinary에 업로드 하고 URL을 획득
    uploadImage(file).then((url) => {
      // firebase에 새로운 제품을 추가함
      console.log(product);
      addNewProduct(product, url);
    });
  };

  return (
    <section className="topMargin">
      {file && <img src={URL.createObjectURL(file)} alt="local file" />}
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>새로운 제품 등록</h2>
        {/* <h2 className="text-2xl font-bold my-4">새로운 제품 등록</h2> */}
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ''}
          placeholder="제품명"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product.price ?? ''}
          placeholder="가격"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ''}
          placeholder="카테고리"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ''}
          placeholder="제품 설명"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="options"
          value={product.options ?? ''}
          placeholder="옵션들 (콤마(,)로 구분"
          required
          onChange={handleChange}
        />

        <button
          className={`${styles.buttons} ${styles['btn-hover']} ${styles['color-2']}`}
        >
          제품 등록하기
        </button>
      </form>
    </section>
  );
};

export default NewProduct;
