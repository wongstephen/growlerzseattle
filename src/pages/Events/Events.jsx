import React, { useEffect, useState } from "react";
import "./Events.css";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFetch = async () => {
    const res = await fetch("https://sheetdb.io/api/v1/v773z8g8v6ih2");
    const data = await res.json();
    setEvents(data);
    setLoading(false);
  };
  useEffect(() => {
    getFetch();
  }, []);

  return (
    <div>
      <PageTitle title="Growlers" subtitle="events" />
      {!loading && (
        <div className="event-container">
          {events.map((event) => (
            <div className="event-card" key={event.title}>
              <div className="event-image">Placeholder</div>
              <h2 className="event-card">{event.title}</h2>
              <p className="event-card date">{event.date}</p>
              <p className="event-card content">{event.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
