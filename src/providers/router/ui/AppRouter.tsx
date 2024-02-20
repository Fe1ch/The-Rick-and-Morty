import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../../../config/routeConfig/routeConfig";
import { Loader } from "../../../components/Loader/Loader";

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={
                    <Suspense fallback={<Loader />}>
                        <main className="main">{element}</main>
                    </Suspense>
                }
            />
        ))}
    </Routes>
);

export default AppRouter;
