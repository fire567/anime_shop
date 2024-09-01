import { css } from "@emotion/css";

export const modalWrapper = css({
    width: "1110px",
});

export const modalContentWrapper = css({
    display: "flex",
    alignItems: "center",
    paddingLeft: "64px",
    width: "100%",
    height: "100%",
});

export const description = css({
    width: "435px",
    height: "355px",
    fontSize: "27px",
    color: "#3D3D3D",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
    marginLeft: "50px",
});
