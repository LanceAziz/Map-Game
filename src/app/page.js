import Map from "./components/map/map";
import Score from "./components/score/score";
import { TeamsContextProvider } from "./context/teamContext";
import { CountryContextProvider } from "./context/countryContext";

export default function Home() {
  return (
    <TeamsContextProvider>
      <CountryContextProvider>
        <Score />
        <Map />
      </CountryContextProvider>
    </TeamsContextProvider>
  );
}
