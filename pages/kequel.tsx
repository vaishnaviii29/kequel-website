import React from "react";
import ModhaMain from "@/components/Modha/ModhaMain";
/* import ModhaProjectBrief from "@/components/Modha/ModhaProjectBrief";
import ModhaImageSection from "@/components/Modha/ModhaImageSection";
import ModhaSolution from "@/components/Modha/ModhaSolution";
import OtherProjects from "@/components/common/OtherProjects";
 */
const ModhaProject: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <ModhaMain />
      {/*  <ModhaProjectBrief />
      <ModhaImageSection />
      <ModhaSolution />
      <div className="sm:py-16 pb:20">
        <OtherProjects deltaRobot={true} dlvr={true} bkpk={true}/>
      </div> */}
    </div>
  );
};

export default ModhaProject;
