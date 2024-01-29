import React from "react";
import { Route, Routes } from "react-router-dom";
import FleamarketPage from "../Page/Fleamarket";
import AboutsPage from "../Page/Abouts";
import PageNotFound from "../Page/404Error";
import AboutPage from "../Page/About";
import HomePage from "../Page/Home";
import MyPage from "../Page/My";
import AddFormPage from "../Page/AddForm";
import EditFormPage from "../Page/EditForm";

const Routers = () => {
  return (
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
  );
};

export default Routers;
