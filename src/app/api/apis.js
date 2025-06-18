const url = "https://script.google.com/macros/s/AKfycbzOJZg8cCLE2Wofij7IDRiDFY_aW8UKnub858GMpPVlFEnHvRPTOCgq2_ogZo6h7DQa/exec";

export const getData = async () => {

  try {
    const response = await fetch(url, {
      redirect: "follow",
      method: "GET",
    });

    const data = await response.json();
    console.log("Success:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export const postData = async (team, country) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify({
        team: {
          id: team.id,
          name: team.name,
          color: team.color,
          score: team.score,
          countries: team.countries,
        },
        country: {
          id: country.id,
          color: country.color,
          assignedTeam: country.assignedTeam,
        }
      }),
    });

    const data = await response.json();
    console.log("Success:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};
