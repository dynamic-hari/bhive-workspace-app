import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { facilitiesListDetails, workSpaceListDetails } from "../../data";

const DashboardContext = createContext<any>(null);

const DashboardContextProvider = ({ children }: any): ReactElement => {
  const [spaceOverviewList, setSpaceOverviewList] = useState<any>([]);
  const [facilitiesList, setFacilitiesList] = useState<any>([]);

  useEffect(() => {
    setSpaceOverviewList(workSpaceListDetails);
    setFacilitiesList(facilitiesListDetails);
  }, []);

  const contextValues = useMemo(
    () => ({ spaceOverviewList, facilitiesList }),
    [spaceOverviewList, facilitiesList]
  );

  return (
    <DashboardContext.Provider value={contextValues}>
      {children}
    </DashboardContext.Provider>
  );
};

function useDashboardContext() {
  try {
    return useContext(DashboardContext);
  } catch (error) {
    return null;
  }
}

export { DashboardContext, DashboardContextProvider, useDashboardContext };
