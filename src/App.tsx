import { Navigate, Route, Routes } from "react-router";
import { paths } from "./constants";
import BaseLayout from "./layouts/BaseLayout";
import AuthLayout from "./layouts/AuthLayout";
import HomePage from "./pages/public/HomePage";
import WeddingPage from "./pages/public/WeddingPage";
import LoginPage from "./pages/public/LoginPage";
import TimeLineMngPage from "./pages/private/TimeLineMngPage";
import WeddingMngPage from "./pages/private/WeddingMngPage";
import NotFoundPage from "./pages/error/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="" element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path="wedding" element={<WeddingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="mng" element={<AuthLayout />}>
          <Route index element={<Navigate to={paths.mng.timeline} />} />
          <Route path="timeline" element={<TimeLineMngPage />} />
          <Route path="wedding" element={<WeddingMngPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
