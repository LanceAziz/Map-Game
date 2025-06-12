const postTeamUrl = "";

export const postTeam = async () => {
  try {
    const response = await fetch(postTeamUrl, {
      redirect: "follow",
      method: "PUT",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify({
        id: 1,
        name: "shouhada 2",
        color: "yellow",
        score: { gold: 500, silver: 90, bronze: 7000 },
        countries: ["Egypt"]
      }),
    });

    const data = await response.json();
    console.log("✅ Success:", data);
  } catch (error) {
    console.error("❌ Error:", error);
  }
};
