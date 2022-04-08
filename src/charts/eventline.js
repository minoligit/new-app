import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import './charts.css';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function EventLine(){

    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        Axios.post("http://localhost:8080/selectAllEvents").then((res) => {
            setEventList(res.data);
            console.log(eventList);
        });
    }, []);

    return(
        <div id="eventLine">
            <h4>Timeline</h4>
            <VerticalTimeline>
                {eventList.map((data) => {

                return (
                    <VerticalTimelineElement key={data.eventId} date={data.eventOn} dateClassName="date">
                    <h5 className="vertical-timeline-element-title">
                        {data.title}
                    </h5>
                    <p>{data.content}</p>
                    <h6 className="vertical-timeline-element-subtitle">
                        {"Published on "+data.published}
                    </h6>
                    </VerticalTimelineElement>
                );
                })}
            </VerticalTimeline>
        </div>
    )
}

export default EventLine;