import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WebAbout = () => {
  return (
    <Center>
      <Header1>앗! 죄송해요.</Header1>
      <p>
        원하시는 페이지를 찾을 수 없어요.
        <br />
        찾으시려는 페이지의 주소가 잘못 입력되었거나,
        <br />
        페이지 주소가 변경 또는 삭제되어 더는 사용하실 수 없습니다.
        <br />
        <br />
        입력하신 페이지의 주소가 정확한지 다시 한번 확인해주세요.
      </p>
      <Link to="/">홈으로 이동</Link>
    </Center>
  );
};

export default WebAbout;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 64px);
`;

// theme 파일 폰트 적용 방법 + style-components 사용
const Header1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header1};
  font-weight: ${(props) => props.theme.fontWeights.Header1};
  line-height: ${(props) => props.theme.LineHeight.Header1};
  color: ${(props) => props.theme.colors.secondary};
  font-family: "Pretendard";
`;
