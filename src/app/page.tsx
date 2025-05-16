import Introduction from "@/ui/Introduction";
import SkillGrid from "@/ui/SkillGrid";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/ui/FeaturedProjects";

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
