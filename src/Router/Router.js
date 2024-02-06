import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../Page/Home"));
const AboutPage = lazy(() => import("../Page/About"));
const FleamarketPage = lazy(() => import("../Page/Fleamarket"));
const AboutsPage = lazy(() => import("../Page/Abouts"));
const MyPage = lazy(() => import("../Page/My"));
const AddFormPage = lazy(() => import("../Page/AddForm"));
const EditFormPage = lazy(() => import("../Page/EditForm"));
const PageNotFound = lazy(() => import("../Page/404Error"));

const Routers = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* 기본 화면 설정 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/fleamarket" element={<FleamarketPage />} />
        <Route path="/about" element={<AboutsPage />}>
          <Route path=":id" element={<AboutPage />} />
        </Route>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/addform" element={<AddFormPage />} />
        <Route path="/editform" element={<EditFormPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
