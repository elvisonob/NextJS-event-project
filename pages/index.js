import { getFeaturedEvents } from '../dummy-data';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>{featuredEvents}</h1>
    </div>
  );
};

export default HomePage;
