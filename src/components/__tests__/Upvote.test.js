import { fireEvent, render, screen } from "@testing-library/react";
import Upvote from "../Upvote";

test("Test toggling an upvote", () => {
  const handleOnClick = jest.fn();
  const { upvote } = render(
    <Upvote isActive="false" id="testId" toggleUpvote={handleOnClick} />
  );
  const upvoteElem = screen.getByTestId(upvote, "testId");
  fireEvent.click(upvoteElem);
  expect(upvoteElem.classList.contains("upvoted")).toBe(true);
});
