import { useEffect } from "react";
import { ChoiceData, PollResult, UpdatePollState } from "../types";
// Connect to Store
import useStore from "../store";
import { HorizontalBarChart } from "../components/HorizontalBarChart";
// Initialise the Socket
import { socket, joinRoom } from "../config/socketInitializer";
const Dashboard = () => {
  // Get the store
  const {
    choicesData,
    pollResults,
    updatePollState,
  }: {
    choicesData: ChoiceData[];
    pollResults: PollResult;
    updatePollState: UpdatePollState;
  } = useStore();
  // Join the main_room in Socket
  joinRoom("main_room");
  // Receive the payload and update Store
  useEffect(() => {
    socket.on("receive_message", (data) => {
      updatePollState(data);
    });
  }, [updatePollState]);
  // TODO Five second Timer

  return (
    <div>
      <section>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-[50rem] min-w-[50%]">
              <h1> Poll Results:</h1>
              {/* {JSON.stringify(pollResults, null, 2)} */}
              <HorizontalBarChart data={pollResults} choices={choicesData} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
