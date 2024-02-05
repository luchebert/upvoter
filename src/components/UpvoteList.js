import Upvote from "./Upvote";
import AddUpvote from "./AddUpvote";
import { useState, useEffect } from "react";

/*
 * Component to render a list of upvotes, this is the parent component
 * that passes down most of the functionality through props.
 */
const UpvoteList = ({ upvotesList }) => {
  // persist state in localStorage
  const [upvotes, setUpvotes] = useState(() => {
    const localValue = localStorage.getItem("UPVOTES" + upvotesList);
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  // update state when anything changes
  useEffect(() => {
    localStorage.setItem("UPVOTES" + upvotesList, JSON.stringify(upvotes));
  }, [upvotesList, upvotes]);

  // add new upvote to a list
  function addUpvote() {
    setUpvotes((currentUpvotes) => {
      return [...currentUpvotes, { id: crypto.randomUUID(), isActive: false }];
    });
  }

  // toggle invidivual upvote from non-selected to active
  function toggleUpvote(id, isActive) {
    setUpvotes((currentUpvotes) => {
      return currentUpvotes.map((upvote) => {
        if (upvote.id === id) {
          return { ...upvote, isActive };
        }

        return upvote;
      });
    });
  }
  return (
    <div className="row" key={upvotesList}>
      <div className="col-11 border border-dark rounded">
        <ul className="upvote-list">
          {upvotes.length === 0 && "No Upvotes"}
          {upvotes.map((upvote) => {
            return (
              <li key={upvote.id}>
                <Upvote
                  {...upvote}
                  key={upvote.id}
                  toggleUpvote={toggleUpvote}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <AddUpvote addUpvote={addUpvote} />
    </div>
  );
};

export default UpvoteList;
