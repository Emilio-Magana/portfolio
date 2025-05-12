import Introduction from "../components/Introduction";
import SkillGrid from "../components/SkillGrid";
import Experience from "../components/Experience";
import FeaturedProjects from "../components/FeaturedProjects";

export default function Homepage() {
  return (
    <main>
      <Introduction />
      <SkillGrid />
      <Experience />
      <FeaturedProjects />
    </main>
  );
}
