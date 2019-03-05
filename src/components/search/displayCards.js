import React from "react";
import Classes from "./displayCards.module.css";
const displayCards = props => {
  const { booksdetails } = props;
  console.log("displayCrad", booksdetails);

  let cardComponent = input => (
    <div key={input.id} className={Classes.card}>
      <img
        src={input.thumbnail}
        style={{
          bordeRadius: "8",
          width: "92%",
          position: "relative",
          top: "-26px"
        }}
        alt="..."
      />
      <div className={Classes.cardContent}>
        <h5
          style={{
            gridRow: "1",
            fontSize: "20px",
            fontWeight: "bolder",
            fontFamily: "Roboto"
          }}
        >
          {input.title}
        </h5>
        <p style={{ gridRow: "2" }}>by: {input.author}</p>
        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            borderRadius: "3px",
            border: "0px solid #4CAF50",
            padding: "5px",
            gridRow: "3"
          }}
        >
          See this Book
        </button>
      </div>
    </div>
  );

  return (
    <div className={Classes.container}>
      <div className={Classes.nested}>
        {booksdetails.map(e => cardComponent(e))}
      </div>
    </div>
  );
};

export default displayCards;
