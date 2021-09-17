import { useState, React } from "react";
import "../components/TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Don Skilful",
      url: "https://i.pinimg.com/originals/7c/3d/27/7c3d27185b14c189a5446f0a2508f692.jpg",
    },
    {
      name: "John Doe",
      url: "https://i.pinimg.com/originals/7c/3d/27/7c3d27185b14c189a5446f0a2508f692.jpg",
    },
    {
      name: "John Doe",
      url: "https://i.pinimg.com/originals/7c/3d/27/7c3d27185b14c189a5446f0a2508f692.jpg",
    },
    {
      name: "John Doe",
      url: "https://i.pinimg.com/originals/7c/3d/27/7c3d27185b14c189a5446f0a2508f692.jpg",
    },
    {
      name: "John Doe",
      url: "https://i.pinimg.com/originals/7c/3d/27/7c3d27185b14c189a5446f0a2508f692.jpg",
    },
    {
      name: "John Doe",
      url: "https://i.pinimg.com/originals/7c/3d/27/7c3d27185b14c189a5446f0a2508f692.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing " + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
