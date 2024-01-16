import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

/*1.  Google 제공업체 객체의 인스턴스를 생성 */
const provider = new GoogleAuthProvider();

export async function login() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      //로그인 잘 됬을 경우 결과
      const user = result.user;
      return user;
    })
    .catch(console.error);
}

export async function logout() {
  return (
    signOut(auth)
      //로그아웃 시 null 리턴
      .then(() => null)
      .catch(console.error)
  );
}
