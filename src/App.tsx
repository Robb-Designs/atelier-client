import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardPage } from "@/pages/app/DashboardPage";
import { ProjectsPage } from "./pages/app/ProjectsPage";
import { CreateProjectPage } from "./pages/app/CreateProjectPage";
import { AppLayout } from "@/layouts/AppLayout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="projects/new" element={<CreateProjectPage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
