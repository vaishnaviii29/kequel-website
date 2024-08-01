import React from "react";
import DroneSportsMain from "@/components/dronesports/DroneSportsMain";
import DlvrProjectBrief from "@/components/Dlvr/DlvrProjectBrief";
import DlvrIdeation from "@/components/Dlvr/DlvrIdeation";
import DlvrSolution from "@/components/Dlvr/DlvrSolution";
import OtherProjects from "@/components/common/OtherProjects";
import DlvrOther from "@/components/Dlvr/DlvrOther";

const DlvrEase: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <DroneSportsMain />
      {/* <DlvrProjectBrief />
      <DlvrIdeation />
      <DlvrSolution />
      <DlvrOther />
      <OtherProjects modha={true} deltaRobot={true} bkpk={true}/> */}
    </div>
  );
};

export default DlvrEase;
