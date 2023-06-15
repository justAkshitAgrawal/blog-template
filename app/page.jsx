import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewsSection title={`The Daily News`} />
      <NewsSection title={`Jobs`} />
      <NewsSection title={`Upcoming Events`} />
    </main>
  );
}
