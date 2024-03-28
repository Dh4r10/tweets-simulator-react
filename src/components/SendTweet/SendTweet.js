import React, { useState } from "react";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
import moment from "moment";
import ModalContainer from "../ModalContainer";
import FormSendTweet from "../FormSendTweet";
import { TWEETS_STORAGE } from "../../utils/constants";

import "./SendTweet.scss";

const SendTweet = (props) => {
  const { setToastProps, allTweets } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const sendTweet = (e, formValue) => {
    e.preventDefault();
    const { name, tweet } = formValue;
    let allTweetsArray = [];

    if (allTweets) {
      allTweetsArray = allTweets;
    }

    if (!name || !tweet) {
      setToastProps({
        open: true,
        text: "WARNING: Todos los campos son obligatorios.",
        severity: "warning",
      });
    } else {
      formValue.time = moment();
      allTweetsArray.push(formValue);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));
      setToastProps({
        open: true,
        text: "Tweet enviado correctamente.",
        severity: "success",
      });
      closeModal();
    }
    allTweetsArray = [];
  };

  return (
    <div className="send-tweet">
      <Fab
        className="send-tweet__open-modal"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <Add />
      </Fab>

      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSendTweet sendTweet={sendTweet} />
      </ModalContainer>
    </div>
  );
};

export default SendTweet;
