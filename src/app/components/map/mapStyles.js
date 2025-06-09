export const styles = {
    container: {
        position: "relative",
    },

    countryContainer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 1,
    },

    outlineContainer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 2,
    },
    labelContainer: {
        position: "absolute",
        zIndex: 3,
    },

    outline: {
        position: "absolute",
        top: 0,
        left: 200,
        fontSize: 900,
    },


    country: (left, top, size, coutryColor) => ({
        fill: (!coutryColor || coutryColor == "") ? "#3d3d3d" : coutryColor,
        fontSize: size,
        position: "absolute",
        left: left,
        top: top,
        stroke: "#000000",
        strokeWidth: 3,
    }),
};
