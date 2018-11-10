import React from "react";

const SearchBar = ({ username, setUsername, fetchProfile }) => {
  console.log("username:", username);
  return (
    <div className="notification">
      <div className="field">
        <input
          className="input"
          type="text"
          placeholder="Enter username here..."
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className="field">
        <button
          className="button is-primary"
          onClick={e => fetchProfile(username)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
