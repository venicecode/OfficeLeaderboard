ColLeague

bugs/issues:
-React-router makes requests to backend when page refreshes making working with it during development very difficult.  This could be a webpack issue but was unable to resolve it.
-Auth works, however it doesn't auto sign in users when the token has been signed.  Perhaps use the authController.isSigned middleware to check if the user has a signed token when making an initial get request to any route other than the /api routes
-some strange backend 500 errors sometimes with logging in.
-signup currently doesn't immediately redirect. Might be an issue with the signup component
-Both front-end handlers and backend controllers are set up but we were unable to connect the two.  Format the data so the two can speak to each other.
-Functionality is based on getting the user id from the backend when user signs in.  This is crucial to getting the rest of the handlers to work since the db queries are connected through the userid.
-issues with creating the production build through webpack. It's trying to read the js file as an html file for an unknown reason.