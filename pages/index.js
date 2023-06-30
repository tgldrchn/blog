import { useEffect, useState } from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/joy/Link";
import NextLink from "next/link";
import Head from "next/head";

export default function Home() {
  const [article, setArticles] = useState([]);
  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=whitep4nth3r`)
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
  console.log(article);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Head>
        <meta property="og:title" content="This is my first blog"></meta>
        <meta
          property="og:image"
          content="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg"
        ></meta>
        <meta property="og:type" content="article"></meta>
        <meta
          property="og:description"
          content="There are blogs to help developers"
        ></meta>
        <meta
          property="og:url"
          content="https://blog-five-inky.vercel.app/"
        ></meta>
        <meta property="fb:app_id" content="your_app_id" />
      </Head>
      {article.map((article) => (
        <Card variant="outlined" sx={{ width: 400, margin: "20px" }}>
          <div>
            <div level="h2" fontSize="md" sx={{ mb: 0.5 }}>
              {article.title}
            </div>
            <div level="body2">{article.created_at}</div>
          </div>
          <img
            src={article.social_image}
            srcSet={article.social_image}
            loading="lazy"
            alt=""
          />
          <CardContent orientation="horizontal">
            <div></div>
            <NextLink href={article.slug}>
              <Link>
                <Button
                  variant="solid"
                  size="sm"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", fontWeight: 600 }}
                >
                  Read More
                </Button>
              </Link>
            </NextLink>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
