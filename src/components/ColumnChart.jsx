import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const ColumnChart = () => {
  const [series, setSeries] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get("https://www.alphavantage.co/query", {
          params: {
            function: "TIME_SERIES_DAILY",
            symbol: "IBM",
            // apikey: "O1TGJKNGB4A5JTRV",
          },
        });

        const timeSeries = response.data["Time Series (Daily)"];
        const dates = Object.keys(timeSeries).slice(0, 15).reverse();

        setCategories(dates.map((date) => date.substring(5)));

        setSeries([
          {
            name: "Open Price",
            data: dates.map((date) => parseFloat(timeSeries[date]["1. open"])),
          },
          {
            name: "Close Price",
            data: dates.map((date) => parseFloat(timeSeries[date]["4. close"])),
          },
        ]);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, []);

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        // columnWidth: "50%",
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories,
    },
    yaxis: {
      title: {
        text: "Stock Price ($)",
      },
    },
    fill: {
      opacity: 1,
    },
    colors: ["#1E90FF", "#32CD32"],
  };

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={265} />
    </div>
  );
};

export default ColumnChart;
