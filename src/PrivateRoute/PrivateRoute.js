import { Route, Redirect } from "react-router-dom";
import useAuth from "../Context/useAuth";

function PrivateRoute({ children, ...rest }) {
  const { loggedIn, loading } = useAuth();
  if (loading) {
    return (
      <div class="flex items-center justify-center space-x-2 animate-bounce">
        <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div class="w-8 h-8 bg-green-400 rounded-full"></div>
        <div class="w-8 h-8 bg-black rounded-full"></div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
