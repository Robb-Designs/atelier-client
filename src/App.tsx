import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardPage } from "@/pages/app/DashboardPage";
import { AppLayout } from "@/layouts/AppLayout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
