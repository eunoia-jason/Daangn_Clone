import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./Style/theme";
import TopNavBar from "./Common/TopNavBar";
import Footer from "./Common/Footer";
import { RecoilRoot } from "recoil";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Routers from "./Router/Router";

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
              <Routers />
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
