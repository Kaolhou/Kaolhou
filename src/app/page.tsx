import ContentMain from "@/components/main/content";
import Navigation from "@/components/main/navigation";

export default function Home() {
  return (
    <main className="overflow-x-hidden min-h-screen">
      <Navigation />
      <ContentMain />
    </main>
  );
}
