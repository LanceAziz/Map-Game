import Card from "./components/card";
import { teams } from "./data/data";

export default function Home() {

  return (
    <>
      <div className="col-lg-4 col-md-6 p-1">
        {teams.map((team) => {
          return <Card key={team.id} team={team} />
        })}
      </div>
    </>
  );
}
