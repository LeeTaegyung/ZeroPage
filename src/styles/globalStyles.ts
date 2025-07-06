import { css } from "@emotion/react";

export const globalStyles = css`
  @font-face {
    font-family: "S-CoreDream";
    src: url("/fonts/S-CoreDream-1Thin.woff") format("woff");
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: "S-CoreDream";
    src: url("/fonts/S-CoreDream-2ExtraLight.woff") format("woff");
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: "S-CoreDream";
    src: url("/fonts/S-CoreDream-3Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "S-CoreDream";
    src: url("/fonts/S-CoreDream-4Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "S-CoreDream";
    src: url("/fonts/S-CoreDream-5Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "S-CoreDream";
    src: url("/fonts/S-CoreDream-6Bold.woff") format("woff");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "S-CoreDream";
    src: url("/fonts/S-CoreDream-7ExtraBold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "S-CoreDream";
    src: url("/fonts/S-CoreDream-8Heavy.woff") format("woff");
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: "S-CoreDream";
    src: url("/fonts/S-CoreDream-9Black.woff") format("woff");
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "PyeojinGothic-Bold";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/2504-1@1.0/PyeojinGothic-Bold.woff2")
      format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
    box-sizing: border-box;
  }

  body {
    font-family: "S-CoreDream", serif;
  }
`;
