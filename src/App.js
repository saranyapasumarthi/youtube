import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Store from "./Utils/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      }, 
      {
        path: "/watch",
        element: <WatchPage />
      }
    ]
  },
])
function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
