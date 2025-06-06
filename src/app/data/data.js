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
            "gold": 4,
            "silver": 6,
            "bronze": 10
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
    new Country("Asia1", Asia1, { top: 453, left: 884 }, 96, { top: 480, left: 895 }),
    new Country("Asia2", Asia2, { top: 403, left: 781 }, 156, { top: 440, left: 820 }),
    new Country("Asia3", Asia3, { top: 327, left: 837 }, 157, { top: 400, left: 900 }),
    new Country("Asia4", Asia4, { top: 290, left: 890 }, 115, { top: 335, left: 910 }),
    new Country("Asia5", Asia5, { top: 184, left: 935 }, 164, { top: 200, left: 990 }),
    new Country("Asia6", Asia6, { top: 171, left: 899 }, 93, { top: 190, left: 910 }),
    new Country("Asia7", Asia7, { top: 237, left: 883 }, 103, { top: 270, left: 895 }),
    new Country("Asia8", Asia8, { top: 157, left: 767 }, 197, { top: 190, left: 830 }),
    new Country("Asia9", Asia9, { top: 187, left: 745 }, 170, { top: 250, left: 780 }),
    new Country("Asia10", Asia10, { top: 316, left: 748 }, 110, { top: 350, left: 770 }),
    new Country("Asia11", Asia11, { top: 411, left: 677 }, 142, { top: 430, left: 730 }),

    // Africa
    new Country("Africa1", Africa1, { top: 652, left: 734 }, 80, { top: 680, left: 790 }),
    new Country("Africa2", Africa2, { top: 625, left: 634 }, 120, { top: 660, left: 655 }),
    new Country("Africa3", Africa3, { top: 520, left: 658 }, 148, { top: 550, left: 700 }),
    new Country("Africa4", Africa4, { top: 566, left: 636 }, 88, { top: 590, left: 636 }),
    new Country("Africa5", Africa5, { top: 460, left: 639 }, 88, { top: 460, left: 639 }),
    new Country("Africa6", Africa6, { top: 456, left: 543 }, 148, { top: 510, left: 570 }),

    // Australia
    new Country("Australia1", Australia1, { top: 623, left: 937 }, 115, { top: 680, left: 937 }),
    new Country("Australia2", Australia2, { top: 610, left: 983 }, 138, { top: 650, left: 1040 }),
    new Country("Australia3", Australia3, { top: 535, left: 989 }, 79, { top: 535, left: 1060 }),

    // Europe
    new Country("Europe1", Europe1, { top: 235, left: 548 }, 57, { top: 225, left: 548 }),
    new Country("Europe2", Europe2, { top: 210, left: 601 }, 102, { top: 220, left: 620 }),
    new Country("Europe3", Europe3, { top: 213, left: 632 }, 205, { top: 280, left: 690 }),
    new Country("Europe4", Europe4, { top: 302, left: 600 }, 86, { top: 320, left: 600 }),
    new Country("Europe5", Europe5, { top: 364, left: 604 }, 93, { top: 380, left: 620 }),
    new Country("Europe6", Europe6, { top: 363, left: 525 }, 105, { top: 400, left: 525 }),
    new Country("Europe7", Europe7, { top: 285, left: 509 }, 88, { top: 300, left: 520 }),

    // NorthAmerica
    new Country("NorthAmerica1", NorthAmerica1, { top: 199, left: 197 }, 92, { top: 210, left: 197 }),
    new Country("NorthAmerica2", NorthAmerica2, { top: 144, left: 268 }, 155, { top: 200, left: 310 }),
    new Country("NorthAmerica3", NorthAmerica3, { top: 245, left: 277 }, 80, { top: 260, left: 280 }),
    new Country("NorthAmerica4", NorthAmerica4, { top: 256, left: 341 }, 80, { top: 260, left: 360 }),
    new Country("NorthAmerica5", NorthAmerica5, { top: 318, left: 280 }, 90, { top: 325, left: 280 }),
    new Country("NorthAmerica6", NorthAmerica6, { top: 387, left: 277 }, 105, { top: 430, left: 255 }),
    new Country("NorthAmerica7", NorthAmerica7, { top: 317, left: 335 }, 113, { top: 350, left: 370 }),
    new Country("NorthAmerica8", NorthAmerica8, { top: 247, left: 392 }, 109, { top: 280, left: 440 }),
    new Country("NorthAmerica9", NorthAmerica9, { top: 150, left: 432 }, 126, { top: 180, left: 470 }),

    // SouthAmerica
    new Country("SouthAmerica1", SouthAmerica1, { top: 590, left: 345 }, 160, { top: 650, left: 370 }),
    new Country("SouthAmerica2", SouthAmerica2, { top: 505, left: 340 }, 118, { top: 560, left: 315 }),
    new Country("SouthAmerica3", SouthAmerica3, { top: 494, left: 373 }, 155, { top: 530, left: 440 }),
    new Country("SouthAmerica4", SouthAmerica4, { top: 440, left: 354 }, 110, { top: 450, left: 380 }),
];