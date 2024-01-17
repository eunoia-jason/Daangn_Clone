import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WebHome = () => {
  return (
    <>
      <Header1>홈 웹 페이지</Header1>
      <Header2>
        이 화면에서는 context api를 통해 theme data를 전달하였습니다.
      </Header2>
      <Link to="/about">소개 페이지</Link>
    </>
  );
};

export default WebHome;

// theme 파일 폰트 적용 방법 + style-components 사용
const Header1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header1};
  font-weight: ${(props) => props.theme.fontWeights.Header1};
  line-height: ${(props) => props.theme.LineHeight.Header1};
  color: ${(props) => props.theme.colors.text};
  font-family: "Pretendard";
`;

const Header2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  line-height: ${(props) => props.theme.LineHeight.Header2};
  color: ${(props) => props.theme.colors.accent};
  font-family: "Pretendard";
`;
