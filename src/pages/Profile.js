import { useEffect } from 'react';

export default function Profile() {
  useEffect(function () {
    document.title = 'Profile';
  }, []);
  return (
    <section className="section">
      <h1 className="section-title">Profile Page</h1>
      <p className="section-description">Hallo namaku junico aku adalah seorang web developer baru saja lulus dari harvard!</p>
    </section>
  );
}
