import UpvoteList from "./components/UpvoteList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

// render multiple upvote lists, they require a unique ID defined by "upvotesList"
const App = () => {
  return (
    <div className="container border border-dark rounded">
      <UpvoteList upvotesList="1" />
      <UpvoteList upvotesList="2" />
      <UpvoteList upvotesList="3" />
    </div>
  );
};

export default App;
