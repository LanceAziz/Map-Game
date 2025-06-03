import Card from "./components/card";
import { teams } from "./data/data";
import { Svgs } from "./assets/svgs";
import styles from "./page.module.css"

export default function Home() {

  return (
    <div className="d-flex">
      <div className="col-lg-4 col-md-6 p-1">
        {teams.map((team) => {
          return <Card key={team.id} team={team} />
        })}
      </div>
      <div className="col-lg-8 col-md-6 d-flex justify-content-center align-items-center">
        <div className="position-absolute w-50">
          <div className={styles.outline}>
            <Svgs.outline />
          </div>
          <div className={styles.country}>
            <Svgs.africa1 />
          </div>
        </div>
      </div>
    </div>
  );
}
