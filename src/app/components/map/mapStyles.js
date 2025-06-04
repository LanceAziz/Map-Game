export const styles = {
    container: {
        position: "relative",
    },

    countryContainer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 2,
    },

    outlineContainer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 3,
    },

    outline: {
        position: "absolute",
        top: 0,
        left: 200,
        fontSize: 900,
        zIndex: 3,
    },


    country: (left, top, size, coutryColor = "#3d3d3d") => ({
        color: coutryColor,
        fontSize: size,
        position: "absolute",
        left: left,
        top: top,
    }),

    color: {
        fill: "azure",
    },
};
