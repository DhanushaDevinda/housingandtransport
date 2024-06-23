import React from "react";
import HousingForm from "./page/HousingForm";
import BasicTable from "./page/DocumentList";
import CheckStatus from "./page/CheckStatus";

import Login from "./page/Login";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MsalProvider } from "@azure/msal-react";
import RouteGuard from "./RouteGuard";
import { msalConfig } from "./authConfig";

const WrappedView = () => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  const handleLogout = () => {
    instance.logout();
  };
  const handleRedirect = () => {
    instance
      .loginRedirect({ ...msalConfig, prompt: "create" })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <AuthenticatedTemplate>
        {activeAccount ? (
          <>
            Authenticated successfully
            <button onClick={handleLogout}>Sign Up</button>
          </>
        ) : null}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <button onClick={handleRedirect}>Sign Up</button>
      </UnauthenticatedTemplate>
    </div>
  );
};
function App({ pca }) {
  return (
    // <MsalProvider instance={pca}>
    //   <WrappedView />
    // </MsalProvider>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/" element={<RouteGuard />}> */}
        <Route path="/admin" element={<HousingForm />} />
        <Route path="/documentList" element={<BasicTable />} />
        <Route path="/status" element={<CheckStatus />} />

        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
