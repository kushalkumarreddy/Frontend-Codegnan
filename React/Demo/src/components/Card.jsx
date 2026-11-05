import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card">
      <h1>{props.details.name}</h1>
      <h6>{props.details.specialization}</h6>
      <h6>{props.details.gender}</h6>
      <Link to={`/doctorDetails/${props.details.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default Card;