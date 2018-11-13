import React from "react";

const Profile = ({ username, profile }) => {
  const defaultImageUri =
    "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png";

  return (
    <div className="box">
      { profile.id
        ? <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={profile.avatar_url || defaultImageUri} alt="avatar" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>
                <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
                  {profile.name || "No name"}
                </a>
              </strong>
              {" "}
              <small>(id: {profile.id || "0"})</small>
            </p>
            <p>
              {`repos: ${profile.public_repos ||
                0} following: ${profile.following ||
                0}  follower: ${profile.followers || 0}`}
            </p>
          </div>
        </div></article>
        : <p>...no profile...</p>
      }
    </div>
  );
};

export default Profile;
