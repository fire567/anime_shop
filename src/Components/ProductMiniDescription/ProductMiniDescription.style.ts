import { css } from "@emotion/css";

export const productMiniDescriptionWrapper = css({
    width: "100%",
    height: "105px",
    padding: "10px",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
});

export const figureName = css({
    fontSize: "14px",
    color: "#F7C40A",
    cursor: "pointer",
});

export const description = css({
    display: "flex",
    justifyContent: "space-between",
    color: "#3D3D3D",
    alignItems: "flex-end",
});

export const price = css({
    fontSize: "11px",
});
