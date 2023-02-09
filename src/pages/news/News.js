import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const News = () => {
  const [news, setNews] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles/");
        const data = await response.json();
        setNews(data);
        setIsLoading(false);
      } catch (err) {}
    };
    getData();
  }, []);
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <ul>
          {news.map((e) => {
            return (
              <li
                key={e.id}
                style={{ backgroundColor: "gray", marginBottom: "20px" }}
              >
                <Link
                  to={`/news/${e.id}`}
                  data-testid={e.id}
                  style={{ textDecoration: "none" }}
                >
                  {e.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      <h2>test</h2>
    </div>
  );
};

export default News;
