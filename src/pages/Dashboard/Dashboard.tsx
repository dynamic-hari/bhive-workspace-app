import { useDashboardContext } from "./DashboardContext";
import HeaderSection from "../../components/HeaderSection";
import BodySection from "../../components/BodySection";
import FooterSection from "../../components/FooterSection";

const Dashboard = () => {
  const { facilitiesList, spaceOverviewList }: any = useDashboardContext();
  return (
    <>
      <HeaderSection />
      <BodySection
        facilitiesList={facilitiesList}
        spaceOverviewList={spaceOverviewList}
      />
      <FooterSection />
    </>
  );
};

export default Dashboard;
