import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, child, get } from 'firebase/database';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase(app);

/*1.  Google 제공업체 객체의 인스턴스를 생성 */
const provider = new GoogleAuthProvider();

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export async function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    // 로그인 했다면, user 정보를 통해서 adminUser를 호출
    const updateuser = user ? user && (await adminUser(user)) : null;

    callback(updateuser);
  });
}

// 사용자가 어드민 권한 가지고 있는지 확인하는 함수
function adminUser(user) {
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
}
