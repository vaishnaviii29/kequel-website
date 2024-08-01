import React from "react";
import BkpkMain from "@/components/Bkpk/BkpkMain";
import BkpkProjectBrief from "@/components/Bkpk/BkpkProjectBrief";
import BkpkSolution from "@/components/Bkpk/BkpkSolution";
import Footer from "@/components/Footer";
import OtherProjects from "@/components/common/OtherProjects";

const Bkpk: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <BkpkMain />
      {/* <BkpkProjectBrief />
      <BkpkSolution />
      <OtherProjects deltaRobot={true} dlvr={true} modha={true}/>
       */}
    
    </div>
  );
};

export default Bkpk;
