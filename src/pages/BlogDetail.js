import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BlogDetail() {
  const params = useParams();
  const [article, setArticles] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(
    function () {
      async function getArticle() {
        const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);

        if (!request.ok) {
          // setLoading(false);
          return setNotFound(true);
        }

        const response = await request.json();

        document.title = response.title;
        setArticles(response);
        setLoading(false);
      }
      getArticle();
    },
    [params]
  );

  if (notFound) {
    return <h1>Artikel tidak ditemukan :(</h1>;
  }

  return (
    <section className="section">
      {loading ? (
        <i>Loading Detail Article</i>
      ) : (
        <article className="article">
          <h1 className="article-title">{article.title}</h1>
          <time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
          <img className="article-image" src={article.imageUrl} alt={article.title} />
          <p className="article-summary">{article.summary}</p>
          <p className="article-source">
            Source:{' '}
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.newsSite}
            </a>
          </p>
        </article>
      )}
    </section>
  );
}
