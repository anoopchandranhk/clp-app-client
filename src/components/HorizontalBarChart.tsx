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
import { ChoiceData, PollResult } from "../types";
import { hexToRgb } from "../utils/hexToRgb.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.cjs";

const fullConfig = resolveConfig(tailwindConfig);
const colors = fullConfig.theme.colors;

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

const choiceData: { [key: string]: number[] } = {};
function convertData(
  data: PollResult,
  choices: ChoiceData[]
): {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
} {
  const labels: string[] = [];
  choices.forEach(({ option }: { option: string }) => {
    choiceData[`${option}Data`] = [];
  });

  Object.keys(data).forEach((key, i) => {
    const user = `User ${i + 1}`;
    labels.push(user);
    Object.keys(data[key]).forEach((choice) => {
      choiceData[`${choice}Data`].push(data[key][choice]);
    });
  });

  const convertedData = {
    labels: labels,
    datasets: choices.map(
      ({ option, color }: { option: string; color: string }) => {
        return {
          label: option,
          data: choiceData[`${option}Data`],
          borderColor: `rgb(${hexToRgb(colors[color]["600"])})`,
          backgroundColor: `rgba(${hexToRgb(colors[color]["600"])}, 0.5)`,
        };
      }
    ),
  };

  return convertedData;
}

export function HorizontalBarChart({
  data,
  choices,
}: {
  data: PollResult;
  choices: ChoiceData[];
}) {
  if (Object.keys(data).length > 0) {
    return <Bar options={options} data={convertData(data, choices)} />;
  } else {
    return <div>No data</div>;
  }
}
