import Navbar from "@/components/Dashboard/Navbar/Navbar";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import React from "react";
import styles from "@/app/dashboard/dashboard.module.css";

const Dashlayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Dashlayout;
