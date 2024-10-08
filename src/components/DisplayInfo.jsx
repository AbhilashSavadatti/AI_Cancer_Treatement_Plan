import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IconAlertCircle,
  IconCircleDashedCheck,
  IconFolder,
  IconHourglassHigh,
  IconUserScan,
} from "@tabler/icons-react";

import MetricsCard from "./MetricsCard"; // Adjust the import path


const DisplayInfo = () => {
  const navigate = useNavigate();
  const metricsData = [
    {
      title: "Upcoming Specialist Appointments",
      value: "0",
      icon: IconHourglassHigh,
      onClick: () => navigate("/appointments/pending"),
    },
    {
      title: "Treatment Status Overview",
      value: "0",
      icon: IconCircleDashedCheck,
      onClick: () => navigate("/treatment/progress"),
    },
    {
      title: "Total Number of Folders",
      value: "0",
      icon: IconFolder,
      onClick: () => navigate("/folders"),
    },
    {
      title: "Overall Screenings Completed",
      value: "0",
      icon: IconUserScan,
      onClick: () => navigate("/screenings"),
    },
    {
      title: "Screenings Successfully Completed",
      value: "0",
      icon: IconCircleDashedCheck,
      onClick: () => navigate("/screenings/completed"),
    },
    {
      title: "Awaiting Screenings",
      value: "0",
      icon: IconHourglassHigh,
      onClick: () => navigate("/screenings/pending"),
    },
    {
      title: "Screenings Past Due Date",
      value: "0",
      icon: IconAlertCircle,
      onClick: () => navigate("/screenings/overdue"),
    },
  ];

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Loop through metricsData to create equally sized cards */}
      {metricsData.map((metric) => (
        <div
          key={metric.title}
          className="cursor-pointer rounded-lg shadow-md transition-transform transform hover:scale-105 h-[200px] sm:h-[200px] lg:h-[200px] w-full"
          onClick={metric.onClick}
        >
          <MetricsCard {...metric} />
        </div>
      ))}
    </div>
  );
};

export default DisplayInfo;
