import Card from "./components/card";

export default function Home() {

  const teams = [
    {
      name: "shouhada 1",
      color: "bg-danger",
      ranks: {
        "general": 3,
        "commander": 10,
        "soldier": 40
      },
      countries: ["cairo", "alex"],
      addCountry(country) {
        return this.countries.push(country).sort
      },
      removeCountry(country) {
        return this.countries.filter(i => i !== country)
      },
    },
    {
      name: "shouhada 2",
      color: "bg-warning",
      ranks: {
        "general": 5,
        "commander": 30,
        "soldier": 70
      },
      countries: ["fayoum"],
      addCountry(country) {
        return this.countries.push(country).sort
      },
      removeCountry(country) {
        return this.countries.filter(i => i !== country)
      },
    },
  ]

  return (
    <div>
      {teams.map((team) => {
        return <Card team={team} />
      })}
    </div>
  );
}
