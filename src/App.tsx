import { Route, Routes } from "react-router";
import { Layout } from "@/components/layout";
import { HomePage } from "@/pages/home";
import { ProjectsPage } from "@/pages/projects";
import { NotFoundPage } from "@/pages/not-found";

// Every path here also needs an entry in src/content/pages.ts so it is pre-rendered.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
