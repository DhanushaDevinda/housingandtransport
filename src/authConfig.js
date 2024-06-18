import { LogLevel } from "@azure/msal-browser";
export const msalConfig = {
  auth: {
    tenantId: "f8cdef31-a31e-4b4a-93e4-5f571e91255a", // Your tenant ID goes here
    clientId: "f8b18635-acc8-4f37-83e5-b142022a550e", // Your client (application) ID goes here
    authority:
      "https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a", // Replace the last part with your tenant ID

    //redirectUri: "https://housingandtransport.vercel.app/", // Must be the same in Azure AD portal, can be replace with an environment variable: process.env.REACT_APP_REDIRECT_URL
    redirectUri: "/", // Must be the same in Azure AD portal, can be replace with an environment variable: process.env.REACT_APP_REDIRECT_URL
    postLogoutRedirectUri: "/",
    navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
  },
  cache: {
    cacheLocation: "sessionStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};
export const protectedResources = {
  quizApi: {
    path: "/",
    scopes: ["api://f8b18635-acc8-4f37-83e5-b142022a550e/HRA"],
  },
};
export const appRoles = {
  Admin: "Admin",
};

export const loginRequest = {
  scopes: ["user.read"],
};
