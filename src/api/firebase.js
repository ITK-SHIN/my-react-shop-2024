import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, set, get, remove } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

import { v4 as uuid } from 'uuid';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase(app);

/*1.  Google 제공업체 객체의 인스턴스를 생성 */
const provider = new GoogleAuthProvider();

export const login = () => {
  signInWithPopup(auth, provider).catch(console.error);
};

export const logout = () => {
  signOut(auth).catch(console.error);
};

export const onUserStateChange = async (callback) => {
  onAuthStateChanged(auth, async (user) => {
    // 로그인 했다면, user 정보를 통해서 adminUser를 호출
    const updateUser = user ? user && (await adminUser(user)) : null;

    callback(updateUser);
  });
};

// 사용자가 어드민 권한 가지고 있는지 확인하는 함수
const adminUser = async (user) => {
  return get(ref(database, 'admins')).then((snapshot) => {
    if (snapshot.exists()) {
      const admins = snapshot.val();
      // 지금 사용자가 admin이면 받아온 admins라는 배열 안에 사용자의 유저 아이디가 있으면 true
      const isAdmin = admins.includes(user.uid);
      return { ...user, isAdmin };
    }
    //admin이 존재하지 않거나, 네트워크를 잘 받아오지 못한 경우, user 정보를 return 해 준다.
    // 그러면 admin이라는 데이터가 없기 때문에, admin이 아닌 것으로 간주될 것이다.
    return user;
  });
};

export const addNewProduct = async (product, imageUrl) => {
  const id = uuid();
  // products의 id라는 키에 내 제품의 정보를 등록할 것.
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    //price는 문자열 형태로 받기 때문에 number 타입으로 저장하기 위해서 parseInt 사용
    // 이렇게 해야 데이터 베이스에 숫자로 저장된다.
    price: parseInt(product.price),
    image: imageUrl, // image 키에 imageUrl 등록
    //options
    // 배열 형태로 저장하기 위해서 split 함수 사용
    options: product.options.split(','),
  });
};

export const getProducts = async () => {
  return get(ref(database, 'products')).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val()); // 객체의 value들만 가져오기
    }
    return []; // snapshot이 없다면 빈 배열 반환
  });
};

// 특정 사용자의 카트 읽어오기
export const getCart = async (userId) => {
  return get(ref(database, `carts/${userId}`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {};
      return Object.values(items);
    });
};

// 특정 사용자의 상품 추가/업데이트 하기
export const addOrUpdateToCart = async (userId, product) => {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
};

// 특정 사용자의 상품 제거하기
export const removeFromCart = async (userId, productId) => {
  return remove(ref(database, `carts/${userId}/${productId}`));
};
