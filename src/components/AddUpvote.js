import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

// add + button + for an invidivual upvote list
const AddUpvote = ({ addUpvote }) => {
  return (
    <div className="col-1">
      <FontAwesomeIcon icon={faCirclePlus} onClick={addUpvote} />
    </div>
  );
};

export default AddUpvote;
