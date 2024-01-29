import React from "react";
import { useMediaQuery } from "react-responsive";
import AppEditForm from "./Components/App/AppEditForm";
import WebEditForm from "./Components/Web/WebEditForm";

const EditFormPage = () => {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <>
      {isDesktopOrMobile === true ? (
        <div>
          <AppEditForm />
        </div>
      ) : (
        <div>
          <WebEditForm />
        </div>
      )}
    </>
  );
};

export default EditFormPage;
