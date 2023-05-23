import EventItem from './event-item';

const EventList = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((event) => {
        return <li>{event}</li>;
      })}
    </ul>
  );
};

export default EventList;
