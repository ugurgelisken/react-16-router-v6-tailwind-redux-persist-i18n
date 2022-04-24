import { useSelector } from "react-redux";
import { Route, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, isLogin, ...rest }) => {
  const location = useLocation();
  const { isMenuOpen } = useSelector((state) => state.application);
  return (
    <Route {...rest}>
      {isLogin === true ? (
        <>
          <div className={`Main ${isMenuOpen ? "main-open" : "main-close"}`}>
            <Component />
          </div>
        </>
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
    </Route>
  );
};

export default ProtectedRoutes;
