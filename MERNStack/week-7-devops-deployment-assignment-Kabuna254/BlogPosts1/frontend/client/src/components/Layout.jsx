import { Separator } from "./ui/separator";
import { Card, CardContent } from "./ui/card";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col px-4 md:px-8 py-6">
      <Navbar />
      <Separator />
      <main className="flex-grow flex items-center justify-center">
        <Card className="w-full max-w-screen-lg mx-auto my-8 p-8">
          <CardContent className="py-6 px-4">
            {children}
          </CardContent>
        </Card>
      </main>
      <Separator />
      <Footer />
    </div>
  );
};

export default Layout;