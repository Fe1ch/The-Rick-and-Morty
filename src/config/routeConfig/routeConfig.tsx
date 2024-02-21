import { RouteProps } from "react-router-dom";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import {HomePage} from "../../pages/HomePage/HomePage";
import {MainPage} from "../../pages/MainPage/MainPage";
import {CardPage} from "../../pages/CardPage/CardPage";

export enum AppRoutes {
    HOME = "home",
    MAIN = "main",
    CARDS_ID = "cards_id",
    NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.MAIN]: "/cards",
    [AppRoutes.CARDS_ID]: "/cards/:id",
    [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage />,
    },
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.CARDS_ID]: {
        path: RoutePath.cards_id,
        element: <CardPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
