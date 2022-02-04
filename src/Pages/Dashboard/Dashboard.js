import React from "react";
import DashboardCard from "../../Components/Cards/DashboardCards/DashboardCard";
import UnpaidCard from "../../Components/Cards/UnpaidCard/UnpaidCard";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__left_container">
        <div className="dashboard__left__top_container">
          <DashboardCard main="₹3,450" sub="Fees Paid" />
          <DashboardCard main="₹4,563" sub="Fees Overdue" />
        </div>
        <UnpaidCard />
      </div>
    </div>
  );
};

export default Dashboard;
