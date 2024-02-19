import { useState } from 'react';
import styles from './NewProduct.module.css';
import { uploadImage } from '../api/uploader.js';
import { addNewProduct } from '../api/firebase.js';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const NewProduct = () => {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false); // 업로드 중/ 아닌지 상태
  const [success, setSuccess] = useState(); // 업로드 성공/ 실패 상태

  const queryClient = useQueryClient();
  const addProduct = useMutation({
    mutationFn: ({ product, url }) => addNewProduct(product, url),
    onSuccess: () => queryClient.invalidateQueries(['products']),
  });

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
    setIsUploading(true);

    // 제품의 사진을 Cloudinary에 업로드 하고 URL을 획득
    uploadImage(file)
      .then((url) => {
        // firebase에 새로운 제품을 추가함
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess(' 성공적으로 제품이 추가되었습니다. ');
              setTimeout(() => {
                setSuccess(null);
              }, 5000); // 일정 시간이 지나면 성공 문구 안보이도록
            },
          }
        );
      })

      .finally(() => setIsUploading(false)); // 무조건 적으로 호출
  };

  return (
    <section className="topMargin">
      <h2 className={styles.title}>새로운 제품 등록</h2>
      {file && (
        <img
          className={styles.image}
          src={URL.createObjectURL(file)}
          alt="제품 이미지"
        />
      )}
      <form onSubmit={handleSubmit} className={styles.form}>
        {success && <p>✅ {success}</p>}
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
          placeholder="옵션들 ( 콤마(,)로 구분 )"
          required
          onChange={handleChange}
        />

        <button
          className={`${styles.buttons} ${styles['btn-hover']} ${
            styles['color-2']
          } ${isUploading && styles.uploadBtn}`}
          disabled={isUploading} //isUploading이 true인 경우 버튼 비활성화
        >
          {isUploading ? '업로드중...' : '제품 등록하기'}
        </button>
      </form>
    </section>
  );
};

export default NewProduct;
