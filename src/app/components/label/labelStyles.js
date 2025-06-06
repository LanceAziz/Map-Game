export const styles = {
    label: (left, top) => ({
        position: "absolute",
        left: left,
        top: top,
        zIndex: 5,
        width: 70
    }),
    coinOutter: (color) => ({
        width: 18,
        height: 18,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        margin: "0 2px",
        color: "#ffffff",
        backgroundColor: color,
        borderBottom: "1px solid rgba(0, 0, 0, 0.5)"
    }),
    coinInner: (color) => ({
        fontSize: 6,
        width: 14,
        height: 14,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        color: "#ffffff",
        backgroundColor: color,
    }),
    labelName: {
        fontSize: 6,
        backgroundColor: "#585858",
        color: "#ffffff",
        padding: "2px 4px",
        margin: "2px 0",
        borderRadius: 3,
        borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
        cursor: "pointer"
    }
};
