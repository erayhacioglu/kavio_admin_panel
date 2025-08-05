import { Routes, Route } from "react-router";
import Layout from "./layouts/Layout";
import UserLayout from "./layouts/UserLayout";
import Home from "./pages/Home";
import useTheme from "./hooks/useTheme";
//pages
import List from "./pages/TestPage/List";
import Create from "./pages/TestPage/Create";
//User
import UserProfile from "./pages/UserDetail/UserProfile";
import UserConnections from "./pages/UserDetail/UserConnections";
import UserStatistics from "./pages/UserDetail/UserStatistics";

const App = () => {
  useTheme();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="list" element={<List />} />
        <Route path="create" element={<Create />} />

        <Route path="user/:id" element={<UserLayout />}>
          <Route path="profile" element={<UserProfile />} />
          <Route path="connections" element={<UserConnections />} />
          <Route path="statistics" element={<UserStatistics />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
