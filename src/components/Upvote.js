import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

// simple component to render a font-awesome upvote icon
const Upvote = ({ isActive, id, toggleUpvote }) => {
  return (
    <FontAwesomeIcon
      icon={faCircleArrowUp}
      onClick={() => toggleUpvote(id, isActive ? false : true)}
      className={isActive ? "upvoted" : ""}
    />
  );
};

export default Upvote;
