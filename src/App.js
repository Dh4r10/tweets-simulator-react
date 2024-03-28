import React, { useState, useEffect } from "react";
import { Container, Snackbar, Alert } from "@mui/material";
import Header from "./components/Header";
import SendTweet from "./components/SendTweet";
import ListTweets from "./components/ListTweets";

import { TWEETS_STORAGE } from "./utils/constants";

function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null,
    severity: null,
  });
  const [allTweets, setAllTweets] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const AllTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(AllTweetsStorage);
    setAllTweets(allTweetsArray);
    setReload(false);
  }, [reload]);

  const deleteTweet = (id) => {
    allTweets.splice(id, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setReload(true);
  };

  const handleClose = () => {
    setToastProps({
      ...toastProps,
      open: false,
    });
  };

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet setToastProps={setToastProps} allTweets={allTweets} />
      <ListTweets allTweets={allTweets} deleteTweet={deleteTweet} />
      <Snackbar
        open={toastProps.open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert severity={toastProps.severity} onClose={handleClose}>
          {toastProps.text}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default App;
