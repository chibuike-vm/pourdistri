import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    HomeLayout,
    About,
    DistributorApplication,
    Landing,
    SinglePageError,
    SingleCocktail,
    GlobalErrorPage,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/SingleCocktail";
import { action as applicationFormAction } from "./pages/DistributorApplication";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <GlobalErrorPage />,
        children: [
            {
                index: true,
                element: <Landing />,
                loader: landingLoader,
                errorElement: <SinglePageError />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "apply",
                element: <DistributorApplication />,
                action: applicationFormAction,
            },
            {
                path: "cocktail/:id",
                element: <SingleCocktail />,
                loader: singleCocktailLoader,
                errorElement: <SinglePageError />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};
export default App;
