import React from "react";
import { useMediaQuery } from "react-responsive";
import AppAddForm from "./Components/App/AppAddForm";
import WebAddForm from "./Components/Web/WebAddForm";

const AddFormPage = () => {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <>
      {isDesktopOrMobile === true ? (
        <div>
          <AppAddForm />
        </div>
      ) : (
        <div>
          <WebAddForm />
        </div>
      )}
    </>
  );
};

export default AddFormPage;
