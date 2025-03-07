import { createGlobalStyle } from "styled-components";
import PretendardThin from "/font/Pretendard-Thin.woff2";
import PretendardExtraLight from "/font/Pretendard-ExtraLight.woff2";
import PretendardLight from "/font/Pretendard-Light.woff2";
import PretendardRegular from "/font/Pretendard-Regular.woff2";
import PretendardMedium from "/font/Pretendard-Medium.woff2";
import PretendardSemiBold from "/font/Pretendard-SemiBold.woff2";
import PretendardBold from "/font/Pretendard-Bold.woff2";
import PretendardExtraBold from "/font/Pretendard-ExtraBold.woff2";
import PretendardBlack from "/font/Pretendard-Black.woff2";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    src: local("PretendardThin"), local("PretendardThin");
    font-style: normal;
    font-weight: 100;
    src: url(${PretendardThin}) format("woff2");
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard";
    src: local("PretendardExtraLight"), local("PretendardExtraLight");
    font-style: normal;
    font-weight: 200;
    src: url(${PretendardExtraLight}) format("woff2");
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard";
    src: local("PretendardLight"), local("PretendardLight");
    font-style: normal;
    font-weight: 300;
    src: url(${PretendardLight}) format("woff2");
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard";
    src: local("PretendardRegular"), local("PretendardRegular");
    font-style: normal;
    font-weight: 400;
    src: url(${PretendardRegular}) format("woff2");
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard";
    src: local("PretendardMedium"), local("PretendardMedium");
    font-style: normal;
    font-weight: 500;
    src: url(${PretendardMedium}) format("woff2");
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard";
    src: local("PretendardSemiBold"), local("PretendardSemiBold");
    font-style: normal;
    font-weight: 600;
    src: url(${PretendardSemiBold}) format("woff2");
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard";
    src: local("PretendardBold"), local("PretendardBold");
    font-style: normal;
    font-weight: 700;
    src: url(${PretendardBold}) format("woff2");
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard";
    src: local("PretendardExtraBold"), local("PretendardExtraBold");
    font-style: normal;
    font-weight: 800;
    src: url(${PretendardExtraBold}) format("woff2");
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard";
    src: local("PretendardBlack"), local("PretendardBlack");
    font-style: normal;
    font-weight: 900;
    src: url(${PretendardBlack}) format("woff2");
    font-display: swap;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Pretendard", sans-serif;
    background-color: #f7f8f9;
  }
`;

export default GlobalStyle;
