import { socket, joinRoom } from "../config/socketInitializer";
import { useEffect } from "react";

import useStore from "../store/index";
import { HorizontalBarChart } from "../components/HorizontalBarChart";

const Dashboard = () => {
  // Get the store
  const { pollResults, updatePollState }: any = useStore();
  // Join the main_room in Socket
  joinRoom("main_room");
  // Receive the payload and update Store
  useEffect(() => {
    socket.on("receive_message", (data) => {
      updatePollState(data);
    });
  });

  return (
    <div>
      <section>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-[50rem] min-w-[50%]">
              <h1> Poll Results:</h1>
              {/* {JSON.stringify(pollResults, null, 2)} */}
              <HorizontalBarChart data={pollResults} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
