import { Route, Routes } from "react-router";
import { Layout } from "@/components/layout";
import { HomePage } from "@/pages/home";
import { SolutionsPage } from "@/pages/solutions";
import { SectorsPage } from "@/pages/sectors";
import { SectorPage } from "@/pages/sector";
import { ProjectsPage } from "@/pages/projects";
import { AboutPage } from "@/pages/about";
import { ContactPage } from "@/pages/contact";
import { NotFoundPage } from "@/pages/not-found";

// Every path here also needs an entry in src/content/pages.ts so it is pre-rendered.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="sectors" element={<SectorsPage />} />
        <Route path="sectors/:slug" element={<SectorPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
