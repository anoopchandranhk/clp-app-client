import { FC } from "react";
import Button from "../components/atoms/Button";
import { socket, joinRoom } from "../config/socketInitializer";
import useStore from "../store";
import { PollResult } from "../types";

const Client: FC = () => {
  // Get the store
  const { choicesData, pollResults, updatePollState } = useStore();

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
        payload = {
          [socket.id]: {
            ...pollResults[socket.id],
            [choice]: 1,
          },
        };
        updatePollState(payload);
      } else {
        payload = {
          [socket.id]: {
            ...pollResults[socket.id],
            [choice]: pollResults[socket.id][choice] + 1,
          },
        };

        updatePollState(payload);
      }
    }
    socket.emit("send_message", pollResults);
  };

  return (
    <div>
      <main className="py-10 px-5 flex flex-col gap-10 text-center my-auto">
        <section>
          <h1 className="text-xl">{`You have ${choicesData.length} choices`}</h1>

          <div className="flex flex-row flex-wrap gap-10 justify-center mx-auto mt-12">
            {choicesData.map(({ label, option, color }) => {
              return (
                <Button
                  btnType="secondary"
                  className={`bg-${color}-600 text-white`}
                  key={option}
                  onClick={() => sendChoice(option)}
                >
                  {label}
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
