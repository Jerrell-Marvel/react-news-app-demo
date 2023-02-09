import { Link, Route, Routes, useLocation, BrowserRouter, MemoryRouter } from "react-router-dom";
export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

const Home = () => {
  return (
    <>
      <h1>Welcome to NEWSERA</h1>
      <Link to="/news">Find news</Link>
    </>
  );
};

export default Home;
