import ContentMain from "./_main_page/content";
import Technologies from "./_main_page/technologies";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 justify-end">
      <ContentMain />
      <Technologies />
    </div>
  );
}
