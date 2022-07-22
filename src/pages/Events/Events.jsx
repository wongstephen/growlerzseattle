import React, { useEffect, useState } from "react";
import "./Events.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import placeholderImg from "../../assets/trivia.jpeg";
import loadingImg from "../../assets/3-dots-fade-white-36.svg";
export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFetch = async () => {
    try {
      const res = await fetch("https://sheetdb.io/api/v1/v773z8g8v6ih2");
      const data = await res.json();
      setEvents(data);
      setLoading(false);
    } catch (error) {
      console.log("Error: " + error);
    }
  };
  useEffect(() => {
    getFetch();
  }, []);

  return (
    <div className="page-container">
      <PageTitle title="Growlers" subtitle="events" />
      {loading ? (
        <img
          src={loadingImg}
          alt="loading"
          style={{
            margin: "0 auto",
            display: "block",
          }}
        />
      ) : (
        <div className="event-container">
          {events.map((event) => (
            <div className="event-card" key={event.title}>
              <div className="event-image">
                <img
                  src={event.imgurl !== "" ? event.imgurl : placeholderImg}
                  alt={event.title}
                  className="event-image"
                ></img>
              </div>
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
