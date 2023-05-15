// import { useState, useEffect } from "react";
import Button from "../components/atoms/Button";
import { socket, joinRoom } from "../config/socketInitializer";
import useStore from "../store/index";
import { PollResult } from "../types/pollResult";

const Client = () => {
  // Add choices here
  const choices = [
    {
      label: "Choice One",
      option: "choiceOne",
      class: "bg-orange-600 text-white",
    },
    {
      label: "Choice Two",
      option: "choiceTwo",
      class: "bg-blue-600 text-white",
    },
    // {
    //   label: "Choice three",
    //   option: "choicethree",
    //   class: "bg-green-600 text-white",
    // },
  ];

  // Get the store
  const { pollResults, updatePollState } = useStore();

  // Join the socket room
  joinRoom("main_room");

  // Click function of buttons
  // Create payload, Update the store and emit to the server
  const sendChoice = (choice: string) => {
    let payload: PollResult = {};
    if (!pollResults[socket.id]) {
      payload = {
        [socket.id]: {
          [choice]: 1,
        },
      };
      updatePollState(payload);
    } else {
      if (!pollResults[socket.id][choice]) {
        console.log("trigger 2");

        payload = {
          [socket.id]: {
            ...pollResults[socket.id],
            [choice]: 1,
          },
        };
        updatePollState(payload);
      } else {
        console.log("trigger 3");

        payload = {
          [socket.id]: {
            ...pollResults[socket.id],
            [choice]: pollResults[socket.id][choice] + 1,
          },
        };
        updatePollState(payload);
      }
    }
    // console.log(pollResults, "pollsResult");
    // console.log(payload, "payload");
    socket.emit("send_message", pollResults);
  };

  return (
    <div>
      <main className="py-10 px-5 flex flex-col gap-10 text-center my-auto">
        <section>
          <h1 className="text-xl">You have two choices</h1>

          <div className="flex flex-row flex-wrap gap-10 justify-center mx-auto mt-12">
            {choices.map((choice) => {
              return (
                <Button
                  btnType="secondary"
                  className={choice.class}
                  key={choice.option}
                  onClick={() => sendChoice(choice.option)}
                >
                  {choice.label}
                </Button>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Client;
