import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const { slug } = router.query;
  const [article, setArticles] = useState([]);
  console.log(slug);
  useEffect(() => {
    fetch(`https://dev.to/api/articles/whitep4nth3r/${slug}`)
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
  if (!article) return <div>...loading</div>;
  return (
    <>
      <div>{article.title}</div>
      <div dangerouslySetInnerHTML={{ __html: article.body_html }} />
    </>
  );
}
