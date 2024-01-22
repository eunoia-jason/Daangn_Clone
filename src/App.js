import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./Page/About";
import HomePage from "./Page/Home";
import ChatPage from "./Page/Chat";
import ScrollToTop from "./ScrollToTop";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./Style/theme";
import TopNavBar from "./Common/TopNavBar";
import PageNotFound from "./Page/404Error";
import Footer from "./Common/Footer";
import { RecoilRoot } from "recoil";
import { GoogleOAuthProvider } from "@react-oauth/google";
import FleamarketPage from "./Page/Fleamarket";

function App() {
  const clientId = process.env.REACT_APP_CLIENT_ID;

  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GoogleOAuthProvider clientId={clientId}>
          <Router>
            <ScrollToTop />
            <TopNavBar />
            <Main>
              <Routes>
                {/* 기본 화면 설정 */}
                <Route path="/" element={<HomePage />} />
                <Route path="/fleamarket" element={<FleamarketPage />} />
                <Route path="/about/:id" element={<AboutPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/*" element={<PageNotFound />} />
              </Routes>
            </Main>
            <Footer />
          </Router>
        </GoogleOAuthProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;

const Main = styled.main`
  margin-top: 64px;
`;
