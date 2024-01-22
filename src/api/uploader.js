export async function uploadImage(file) {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', import.meta.env.VITE_FIREBASE_CLOUDINARY_PRESET);

  return fetch(import.meta.env.VITE_FIREBASE_CLOUDINARY_URL, {
    method: 'POST',
    body: data, // 방금 만든 데이터 전달
  })
    .then((res) => res.json())
    .then((data) => data.url);
}
