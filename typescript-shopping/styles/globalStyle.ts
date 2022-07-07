import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html, input, select, textarea {
    font-size: 16px;
  }
  html {
    min-height: 100vh;
  }

  @font-face {
    font-family: "NanumSquare";
    font-weight: 400;
    src: url(/fonts/NanumSquareR.eot);
    src: url(/fonts/NanumSquareR.eot?#iefix) format("embedded-opentype"), url(/fonts/NanumSquareR.woff) format("woff"), url(/fonts/NanumSquareR.woff2) format("woff2"), url(/fonts/NanumSquareR.ttf) format("truetype");
    font-display: swap;
  }

  @font-face {
      font-family: "NanumSquare";
      font-weight: 700;
      src: url(/fonts/NanumSquareB.eot);
      src: url(/fonts/NanumSquareB.eot?#iefix) format("embedded-opentype"), url(/fonts/NanumSquareB.woff) format("woff"), url(/fonts/NanumSquareB.woff2) format("woff2"), url(/fonts/NanumSquareB.ttf) format("truetype");
      font-display: swap;
  }

  @font-face {
      font-family: "NanumSquare";
      font-weight: 800;
      src: url(/fonts/NanumSquareEB.eot);
      src: url(/fonts/NanumSquareEB.eot?#iefix) format("embedded-opentype"), url(/fonts/NanumSquareEB.woff) format("woff"), url(/fonts/NanumSquareEB.woff2) format("woff2"), url(/fonts/NanumSquareEB.ttf) format("truetype");
      font-display: swap;
  }

  @font-face {
      font-family: "NanumSquare";
      font-weight: 300;
      src: url(/fonts/NanumSquareL.eot);
      src: url(/fonts/NanumSquareL.eot?#iefix) format("embedded-opentype"), url(/fonts/NanumSquareL.woff) format("woff"), url(/fonts/NanumSquareL.woff2) format("woff2"), url(/fonts/NanumSquareL.ttf) format("truetype");
      font-display: swap;
  }

  * { 
  font-family: "NanumSquare", "Nanum Gothic", "Malgun Gothic", "맑은고딕", "돋움", "Dotum", "Helvetica", "Apple SD Gothic Neo", Sans-serif;
  }
`;
