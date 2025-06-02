import { Team } from "./team";

export const teams = [
    new Team(
        0,
        "shouhada 1",
        "red",
        {
            general: 3,
            commander: 10,
            soldier: 40
        },
        [
            "cairo",
            "alex"
        ]),

    new Team(1, "shouhada 2", "blue", {
        general: 5,
        commander: 30,
        soldier: 7000
    }, ["fayoum"]),

    new Team(2, "shouhada 3", "yellow", {
        general: 5,
        commander: 30,
        soldier: 70
    }, ["fayoum"]),

    new Team(3, "shouhada 4", "green", {
        general: 5,
        commander: 30,
        soldier: 70
    }, ["fayoum"]),
];
