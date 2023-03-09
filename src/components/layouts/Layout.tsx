import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" scroll-smooth   antialiased ">
      <Header />
      <div className="min-h-[600px] text-[15px] lg:text-base">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
