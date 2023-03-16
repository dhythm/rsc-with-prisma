import { fetch } from "react-fetch";

export const Hello = ({ searchText }) => {
  const user = searchText
    ? fetch(`http://localhost:4000/user/${searchText}`).json()
    : null;

  if (!user) {
    return (
      <div>
        <span>Click a user on the left to view something! 🥺</span>
      </div>
    );
  }

  return <div>Hello, {user.name}!</div>;
};
