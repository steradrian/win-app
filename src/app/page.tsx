import Gallery from "@componentes/components/Gallery";
import Hero from "@componentes/components/Hero";
import Tournaments from "@componentes/components/Tournaments";
import DarkLayout from "./layouts/DarkLayout";
import Leaderboard from "@componentes/components/Leaderboard";

export default function Home() {
  return (
    <DarkLayout>
      <Hero />
      <Gallery />
      <Tournaments />
      <Leaderboard />
    </DarkLayout>
  );
}
