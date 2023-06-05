import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

const HomePage = (props) => {
  //const featuredEvents = getFeaturedEvents();
  const itemsFeatured = props.items1.filter((event) => event.isFeatured);
  return (
    <div>
      <EventList items={itemsFeatured} />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    'https://nextjs-88542-default-rtdb.firebaseio.com/events.json'
  );

  const data = await response.json();
  console.log(data);

  const dataContents = [];
  for (const key in data) {
    dataContents.push({
      id: key,
      date: data[key].date,
      description: data[key].description,
      image: data[key].image,
      isFeatured: data[key].isFeatured,
      location: data[key].location,
      title: data[key].title,
    });
  }

  return { props: { items1: dataContents } };
}

export default HomePage;
