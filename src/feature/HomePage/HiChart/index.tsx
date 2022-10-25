import styles from "../../../styles/Home.module.css";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
require("highcharts/modules/exporting");

const options: Highcharts.Options = {
  title: {
    text: "Branch Performance",
    style: {
      fontSize: "30px",
      fontWeight: "bold",
    },
  },

  plotOptions: {
    series: {
      pointPadding: 0,
      borderWidth: 0,
    },
  },

  chart: {
    borderRadius: 20,
    borderWidth: 2,
  },

  yAxis: {
    labels: {
      style: {
        fontSize: "15px",
        fontWeight: "bold",
      },
      formatter: function () {
        return this.value + "%";
      },
    },
  },

  xAxis: {
    categories: ["EEE", "CSE", "ECE", "IT", "CIV", "MEC"],
    labels: {
      style: {
        fontSize: "15px",
        fontWeight: "bold",
      },
    },
  },

  series: [
    {
      data: [19, 32, 43, 21, 61, 31],
      type: "column",
      name: "Average",
      color: "#b4c4fa",
    },
    {
      data: [10, 23, 53, 28, 40, 10],
      type: "column",
      name: "High",
      color: "#50d5fa",
    },
    {
      data: [11, 22, 43, 62, 13, 21],
      type: "column",
      name: "Low",
      color: "#164cfa",
    },
  ],
};

const HiChart = (props: HighchartsReact.Props) => {
  return (
    <div className={styles.graph}>
      <HighchartsReact highcharts={Highcharts} options={options} {...props} />
    </div>
  );
};

export default HiChart;
