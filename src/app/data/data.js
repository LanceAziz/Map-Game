import { Team } from "../models/team";
import { Country } from "../models/country";
import {
    Asia1,
    Asia2,
    Asia3,
    Asia4,
    Asia5,
    Asia6,
    Asia7,
    Asia8,
    Asia9,
    Asia10,
    Asia11,
    Africa1,
    Africa2,
    Africa3,
    Africa4,
    Africa5,
    Africa6,
    Australia1,
    Australia2,
    Australia3,
    Europe1,
    Europe2,
    Europe3,
    Europe4,
    Europe5,
    Europe6,
    Europe7,
    NorthAmerica1,
    NorthAmerica2,
    NorthAmerica3,
    NorthAmerica4,
    NorthAmerica5,
    NorthAmerica6,
    NorthAmerica7,
    NorthAmerica8,
    NorthAmerica9,
    SouthAmerica1,
    SouthAmerica2,
    SouthAmerica3,
    SouthAmerica4,
} from "../assets/svgs";


export const teams = [
    new Team(
        0,
        "shouhada 1",
        "red",
        {
            gold: 3,
            silver: 10,
            bronze: 40
        },
        [
            "cairo",
            "alex"
        ]),

    new Team(1, "shouhada 2", "blue", {
        gold: 5,
        silver: 30,
        bronze: 7000
    }, ["fayoum"]),

    new Team(2, "shouhada 3", "yellow", {
        gold: 5,
        silver: 30,
        bronze: 70
    }, ["fayoum"]),

    new Team(3, "shouhada 4", "green", {
        gold: 5,
        silver: 30,
        bronze: 70
    }, ["fayoum"]),
];

export const countries = [
  new Country("Asia1", Asia1, { top: 50, left: 90 }, 80),
  new Country("Asia2", Asia2, { top: 50, left: 90 }, 80),
  new Country("Asia3", Asia3, { top: 50, left: 90 }, 80),
  new Country("Asia4", Asia4, { top: 50, left: 90 }, 80),
  new Country("Asia5", Asia5, { top: 50, left: 90 }, 80),
  new Country("Asia6", Asia6, { top: 50, left: 90 }, 80),
  new Country("Asia7", Asia7, { top: 50, left: 90 }, 80),
  new Country("Asia8", Asia8, { top: 50, left: 90 }, 80),
  new Country("Asia9", Asia9, { top: 50, left: 90 }, 80),
  new Country("Asia10", Asia10, { top: 50, left: 90 }, 80),
  new Country("Asia11", Asia11, { top: 50, left: 90 }, 80),

  new Country("Africa1", Africa1, { top: 652, left: 734 }, 80),
  new Country("Africa2", Africa2, { top: 625, left: 634 }, 120),
  new Country("Africa3", Africa3, { top: 520, left: 658 }, 148),
  new Country("Africa4", Africa4, { top: 566, left: 636 }, 88),
  new Country("Africa5", Africa5, { top: 460, left: 639 }, 88),
  new Country("Africa6", Africa6, { top: 456, left: 543 }, 148),

  new Country("Australia1", Australia1, { top: 623, left: 937 }, 115),
  new Country("Australia2", Australia2, { top: 610, left: 983 }, 138),
  new Country("Australia3", Australia3, { top: 535, left: 989 }, 79),

  new Country("Europe1", Europe1, { top: 50, left: 90 }, 80),
  new Country("Europe2", Europe2, { top: 50, left: 90 }, 80),
  new Country("Europe3", Europe3, { top: 50, left: 90 }, 80),
  new Country("Europe4", Europe4, { top: 50, left: 90 }, 80),
  new Country("Europe5", Europe5, { top: 50, left: 90 }, 80),
  new Country("Europe6", Europe6, { top: 50, left: 90 }, 80),
  new Country("Europe7", Europe7, { top: 50, left: 90 }, 80),

  new Country("NorthAmerica1", NorthAmerica1, { top: 50, left: 90 }, 80),
  new Country("NorthAmerica2", NorthAmerica2, { top: 50, left: 90 }, 80),
  new Country("NorthAmerica3", NorthAmerica3, { top: 50, left: 90 }, 80),
  new Country("NorthAmerica4", NorthAmerica4, { top: 50, left: 90 }, 80),
  new Country("NorthAmerica5", NorthAmerica5, { top: 50, left: 90 }, 80),
  new Country("NorthAmerica6", NorthAmerica6, { top: 50, left: 90 }, 80),
  new Country("NorthAmerica7", NorthAmerica7, { top: 50, left: 90 }, 80),
  new Country("NorthAmerica8", NorthAmerica8, { top: 50, left: 90 }, 80),
  new Country("NorthAmerica9", NorthAmerica9, { top: 50, left: 90 }, 80),

  new Country("SouthAmerica1", SouthAmerica1, { top: 50, left: 90 }, 80),
  new Country("SouthAmerica2", SouthAmerica2, { top: 50, left: 90 }, 80),
  new Country("SouthAmerica3", SouthAmerica3, { top: 50, left: 90 }, 80),
  new Country("SouthAmerica4", SouthAmerica4, { top: 50, left: 90 }, 80),
];