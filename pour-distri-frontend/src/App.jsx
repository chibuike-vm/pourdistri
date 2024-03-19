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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 10,
        },
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <GlobalErrorPage />,
        children: [
            {
                index: true,
                element: <Landing />,
                loader: landingLoader(queryClient),
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
                loader: singleCocktailLoader(queryClient),
                errorElement: <SinglePageError />,
            },
        ],
    },
]);

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default App;
