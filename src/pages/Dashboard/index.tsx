import Dashboard from "./Dashboard";
import { DashboardContextProvider } from "./DashboardContext";

const DashboardContainer = () => {
  return (
    <DashboardContextProvider>
      <Dashboard />
    </DashboardContextProvider>
  );
};

export default DashboardContainer;
