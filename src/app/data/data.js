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
            "gold": 40,
            "silver": 600,
            "bronze": 1000
        },
        []),

    new Team(
        1,
        "shouhada 2",
        "blue",
        {
            "gold": 500,
            "silver": 90,
            "bronze": 7000
        },
        []),

    new Team(
        2,
        "shouhada 3",
        "yellow",
        {
            "gold": 5,
            "silver": 30,
            "bronze": 70
        },
        []),

    new Team(
        3,
        "shouhada 4",
        "green",
        {
            "gold": 5,
            "silver": 30,
            "bronze": 70
        },
        []),
];

export const countries = [
    // Asia
    new Country("Slam", Asia1, { top: 453, left: 884 }, 96, { top: 480, left: 895 },),
    new Country("India", Asia2, { top: 403, left: 781 }, 156, { top: 440, left: 820 }),
    new Country("China", Asia3, { top: 327, left: 837 }, 157, { top: 400, left: 900 }),
    new Country("Mongolia", Asia4, { top: 290, left: 890 }, 115, { top: 335, left: 910 }),
    new Country("kamchatka", Asia5, { top: 184, left: 935 }, 164, { top: 200, left: 990 }),
    new Country("yakutsk", Asia6, { top: 171, left: 899 }, 93, { top: 190, left: 910 }),
    new Country("Irkutsk", Asia7, { top: 237, left: 883 }, 103, { top: 270, left: 895 }),
    new Country("Siberia", Asia8, { top: 157, left: 767 }, 197, { top: 190, left: 830 }),
    new Country("Ural", Asia9, { top: 187, left: 745 }, 170, { top: 250, left: 780 }),
    new Country("Afghanistan", Asia10, { top: 316, left: 748 }, 110, { top: 350, left: 770 }),
    new Country("Middle East", Asia11, { top: 411, left: 677 }, 142, { top: 430, left: 730 }),

    // Africa
    new Country("Madagascar", Africa1, { top: 652, left: 734 }, 80, { top: 680, left: 790 }),
    new Country("South Africa", Africa2, { top: 625, left: 634 }, 120, { top: 660, left: 655 }),
    new Country("East Africa", Africa3, { top: 520, left: 658 }, 148, { top: 550, left: 700 }),
    new Country("Congo", Africa4, { top: 566, left: 636 }, 88, { top: 590, left: 636 }),
    new Country("Egypt", Africa5, { top: 460, left: 639 }, 88, { top: 460, left: 639 }),
    new Country("North Africa", Africa6, { top: 456, left: 543 }, 148, { top: 510, left: 570 }),

    // Australia
    new Country("Western Australia", Australia1, { top: 623, left: 937 }, 115, { top: 680, left: 937 }),
    new Country("Eastern Australia", Australia2, { top: 610, left: 983 }, 138, { top: 650, left: 1040 }),
    new Country("New Guinea", Australia3, { top: 535, left: 989 }, 79, { top: 535, left: 1060 }),

    // Europe
    new Country("Iceland", Europe1, { top: 235, left: 548 }, 57, { top: 225, left: 548 }),
    new Country("Scandinavia", Europe2, { top: 210, left: 601 }, 102, { top: 220, left: 620 }),
    new Country("Ukraine", Europe3, { top: 213, left: 632 }, 205, { top: 280, left: 690 }),
    new Country("Northern Europe", Europe4, { top: 302, left: 600 }, 86, { top: 320, left: 600 }),
    new Country("Sourthern Europe", Europe5, { top: 364, left: 604 }, 93, { top: 380, left: 620 }),
    new Country("Western Europe", Europe6, { top: 363, left: 525 }, 105, { top: 400, left: 525 }),
    new Country("Great Britain", Europe7, { top: 285, left: 509 }, 88, { top: 300, left: 520 }),

    // NorthAmerica
    new Country("Alaska", NorthAmerica1, { top: 199, left: 197 }, 92, { top: 210, left: 197 }),
    new Country("N.W. Territory", NorthAmerica2, { top: 144, left: 268 }, 155, { top: 200, left: 310 }),
    new Country("Aberta", NorthAmerica3, { top: 245, left: 277 }, 80, { top: 260, left: 280 }),
    new Country("Ontario", NorthAmerica4, { top: 256, left: 341 }, 80, { top: 260, left: 360 }),
    new Country("W. United States", NorthAmerica5, { top: 318, left: 280 }, 90, { top: 325, left: 280 }),
    new Country("Central America", NorthAmerica6, { top: 387, left: 277 }, 105, { top: 430, left: 255 }),
    new Country("E. United States", NorthAmerica7, { top: 317, left: 335 }, 113, { top: 350, left: 370 }),
    new Country("Quebec", NorthAmerica8, { top: 247, left: 392 }, 109, { top: 280, left: 440 }),
    new Country("Greenland", NorthAmerica9, { top: 150, left: 432 }, 126, { top: 180, left: 470 }),

    // SouthAmerica
    new Country("Argentina", SouthAmerica1, { top: 590, left: 345 }, 160, { top: 650, left: 370 }),
    new Country("Peru", SouthAmerica2, { top: 505, left: 340 }, 118, { top: 560, left: 315 }),
    new Country("Brazil", SouthAmerica3, { top: 494, left: 373 }, 155, { top: 530, left: 440 }),
    new Country("Venezuela", SouthAmerica4, { top: 440, left: 354 }, 110, { top: 450, left: 380 }),
];