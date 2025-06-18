import { TeamsContextProvider } from "./context/teamContext";
import { CountryContextProvider } from "./context/countryContext";
import DataInitializer from "../../dataInitializer";
import App from "./app";

export default function Home() {

  return (
    <TeamsContextProvider>
      <CountryContextProvider>
        <DataInitializer>
          <App />
        </DataInitializer>
      </CountryContextProvider>
    </TeamsContextProvider>
  );
}
