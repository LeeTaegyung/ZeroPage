import { css } from "@emotion/react";

export const globalStyles = css`
  @font-face {
    font-family: "S-CoreDream-3Light";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
    box-sizing: border-box;
  }

  body {
    font-family: "S-CoreDream-3Light";
  }
`;
