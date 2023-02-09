import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const urlParams = useParams();

  const [news, setNews] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        setIsError(false);
        const response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${urlParams.id}`);
        if (!response.ok) {
          setIsLoading(false);
          throw new Error("Data not found");
        }
        const data = await response.json();
        setNews(data);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
      }
    };
    getData();
  }, []);

  if (isError) {
    return <h3>Cannot found data</h3>;
  }

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <div>
          <h2>{news.title}</h2>
          <h3>{news.id}</h3>
        </div>
      )}
      {/* <h2>test</h2> */}
    </div>
  );
};
export default NewsDetails;
