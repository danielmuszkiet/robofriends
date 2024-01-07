import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, index) => {
        if (true) {
          throw new Error("NOOOO");
        }
        return (
          <Card
            id={user.id}
            name={user.name}
            email={user.email}
            key={user.id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
