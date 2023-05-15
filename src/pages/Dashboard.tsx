import { useEffect, useState } from "react";
// Connect to Store
import useStore from "../store/index";
import { HorizontalBarChart } from "../components/HorizontalBarChart";
import Loader from "../components/atoms/Loader";
// Initialise the Socket
import { socket, joinRoom } from "../config/socketInitializer";
const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(true);

  // Get the store
  const { pollResults, updatePollState }: any = useStore();
  // Join the main_room in Socket
  joinRoom("main_room");
  // Receive the payload and update Store
  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data, "data");

      updatePollState(data);
    });
  }, [updatePollState]);
  // Five second Timer
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  });

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
};

export default Dashboard;
