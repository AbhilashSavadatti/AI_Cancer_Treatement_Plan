import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Sidebar, Navbar } from "./components";
import { Home } from "./pages";
import Record from "./pages/Record";


const App = () => {

  const navigate = useNavigate();

  return (
    <div className="sm:-8 relative flex min-h-screen flex-row bg-[#fffcfc] p-4">
      <div className="relative mr-10 hidden sm:flex">
        <Sidebar />
      </div>

      <div className="mx-auto max-w-[1280px] flex-1 max-sm:w-full sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={""} />
          <Route path="/onboarding" element={""} />
          <Route path="/medical-records" element={<Record/>} />
          <Route path="/screening-schedules" element={""} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
