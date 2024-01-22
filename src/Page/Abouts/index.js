import React from "react";
import { useMediaQuery } from "react-responsive";
import AppAbouts from "./Components/App/AppAbouts";
import WebAbouts from "./Components/Web/WebAbouts";

const AboutsPage = () => {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <>
      {isDesktopOrMobile === true ? (
        <div>
          <AppAbouts />
        </div>
      ) : (
        <div>
          <WebAbouts />
        </div>
      )}
    </>
  );
};

export default AboutsPage;
