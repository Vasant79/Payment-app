import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import Signin from "./components/Signin";

function App() {
  return (
    <div>
      <Suspense fallback={"Loading"}>
        <Routes>
          <Route>
            {privateRoutes.map((eachRoute) => {
              return (
                <Route
                  key={eachRoute.path}
                  path={eachRoute.path}
                  element={eachRoute.element}
                ></Route>
              );
            })}
          </Route>

          {publicRoutes.map((eachRoute) => {
            return (
              <Route
                key={eachRoute.path}
                path={eachRoute.path}
                element={eachRoute.element}
              />
            );
          })}

          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
