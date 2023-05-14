import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Number of Clicks By Users on the Choices",
    },
  },
};

function convertData(data: { [key: string]: { [key: string]: number } }): {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
} {
  const labels: string[] = [];
  const choiceOneData: number[] = [];
  const choiceTwoData: number[] = [];

  Object.keys(data).forEach((key, i) => {
    const user = `User ${i + 1}`;
    labels.push(user);
    choiceOneData.push(data[key].choiceOne);
    choiceTwoData.push(data[key].choiceTwo);
  });

  const convertedData = {
    labels: labels,
    datasets: [
      {
        label: "choiceOne",
        data: choiceOneData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "choiceTwo",
        data: choiceTwoData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return convertedData;
}

export function HorizontalBarChart({ data }: any) {
  if (Object.keys(data).length > 0) {
    return <Bar options={options} data={convertData(data)} />;
  } else {
    return <div>No data</div>;
  }
}
