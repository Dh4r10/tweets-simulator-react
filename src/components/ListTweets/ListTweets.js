import React from "react";
import { Grid } from "@mui/material";
import Tweet from "../Tweet";

import "./ListTweets.scss";

const ListTweets = (props) => {
  const { allTweets, deleteTweet } = props;

  return (
    <div className="list-tweets">
      {!allTweets || allTweets.length === 0 ? (
        <div className="list-tweets-empty">
          <h2>No hay Tweets...</h2>
        </div>
      ) : (
        <div className="list-tweets-full">
          <Grid container spacing={3} className="list-tweets-full-boxes">
            {allTweets.map((tweet, id) => (
              <Grid key={id} item xs={4}>
                <Tweet tweet={tweet} id={id} deleteTweet={deleteTweet} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default ListTweets;
