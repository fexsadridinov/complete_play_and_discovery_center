import { AnnouncementBar } from "./AnnouncementBar";
import { Header } from "./Header";

export function SiteChrome() {
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <AnnouncementBar />
      <Header />
    </div>
  );
}
