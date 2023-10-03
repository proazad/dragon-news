import { useLoaderData } from "react-router-dom";
import SingleNews from "../../SingleNews/SingleNews";
import { useEffect, useState } from "react";

const MainContent = () => {
  const [news, setNews] = useState([]);
  const allNews = useLoaderData();
  useEffect(() => {
    const shortNews = allNews.slice(0, 5);
    setNews(shortNews);
  }, [allNews]);
  const handleLoadMore = () => {
    news.push(...allNews.slice(5, 10));
  };
  return (
    <div className="lg:col-span-2 px-2 lg:px-0">
      <h2 className="text-xl font-semibold text-gray-700">Dragon News Home</h2>
      {news.map((singleNews) => (
        <SingleNews key={singleNews._id} singleNews={singleNews} />
      ))}
      <div className="text-center my-10">
        <button onClick={handleLoadMore} className="btn w-full btn-secondary">
          See More
        </button>
      </div>
    </div>
  );
};

export default MainContent;
