import React from "react";
import { useMediaQuery } from "react-responsive";
import AppNotFound from "./Components/App/AppNotFound";
import WebNotFound from "./Components/Web/WebNotFound";

const PageNotFound = () => {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <>
      {isDesktopOrMobile === true ? (
        <div>
          <AppNotFound />
        </div>
      ) : (
        <div>
          <WebNotFound />
        </div>
      )}
    </>
  );
};

export default PageNotFound;
