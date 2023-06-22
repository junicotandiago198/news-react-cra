import { useEffect } from 'react';

export default function Contact() {
  useEffect(function () {
    document.title = 'Contact';
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Contact Page</h1>
      <p className="section-description">Kamu dapat menghubungiku kontak dibawah ini:</p>
      <ul>
        <li>WA: 08137924252</li>
        <li>Email: junico21@gmail.com</li>
      </ul>
      <p className="section-description">Atau kamu dapat melihatku pansos di sosmed</p>
      <ul>
        <li>
          <a href="https://facebook.com">Facebook</a>
        </li>
        <li>
          <a href="https://twitter.com">Twitter</a>
        </li>
      </ul>
    </section>
  );
}
