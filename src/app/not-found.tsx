import { ContentManager } from "@/lib/content-manager";
import NotFoundPage from "@/components/pages/NotFoundPage";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default async function NotFound() {
  // Fetch content for 404 page
  const notFoundContent = await ContentManager.getNotFoundContent();
  const headerContent = await ContentManager.getHeaderContent();
  const footerContent = await ContentManager.getFooterContent();

  return (
    <div className="min-h-screen flex flex-col">
      <Header content={headerContent} />
      <div className="flex-1">
        <NotFoundPage content={notFoundContent} />
      </div>
      <Footer content={footerContent} />
    </div>
  );
}
