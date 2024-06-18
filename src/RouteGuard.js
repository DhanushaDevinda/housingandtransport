import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { msalConfig } from "./authConfig";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import HousingForm from "./page/HousingForm";

const RouteGuard = ({ roles, children, props }) => {
  const { instance } = useMsal();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [message, setMessage] = useState("");
  //   const location = useLocation();
  const history = useNavigate();

  const onLoad = async () => {
    const currentAccount = instance.getActiveAccount();
    console.log(currentAccount);

    if (currentAccount) {
      if (currentAccount.tenantId === msalConfig.auth.tenantId) {
        const idTokenClaims = currentAccount.idTokenClaims;
        if (
          idTokenClaims &&
          idTokenClaims.aud === msalConfig.auth.clientId &&
          idTokenClaims["roles"]
        ) {
          const intersection = roles.filter((role) =>
            idTokenClaims["roles"].includes(role)
          );
          if (intersection.length > 0) {
            setIsAuthorized(true);
          } else {
            setMessage(
              "You don't have the required role to view this page. Please contact the site administrator."
            );
            console.log(
              "You don't have the required role to view this page. Please contact the site administrator."
            );
          }
        } else {
          console.log(
            "The application you authorized with cannot access this page. Please contact the site administrator"
          );

          setMessage(
            "The application you authorized with cannot access this page. Please contact the site administrator."
          );
        }
      } else {
        history.push("/admin");
        console.log("Your organization does not have access to this content");

        setMessage("Your organization does not have access to this content.");
      }
    }
  };

  useEffect(() => {
    onLoad();
  }); // Run once on component mount

  if (isAuthorized) {
    return children;
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h4>{message}</h4>
      </div>
    );
  }
};

export default RouteGuard;
