import type React from "react";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
interface Props {
  rating: number;
}

const Rating: React.FC<Props> = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} color="gold" />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<FaStarHalf key={i} color="gold" />);
    } else {
      stars.push(<FaRegStar key={i} color="gold" />);
    }
  }

  return <div className="flex">{stars}</div>;
};

export default Rating;
