import Nav from "./nav/Nav";
import SideNav from "./nav/SideNav";
import TopNav from "./nav/TopNav";

export default function Layout({ children, className }) {
  return (
    <div className="relative font-manrope">
      <TopNav />
      <div className="flex w-[100vw] h-[100vh] max-h-[calc(100vh-100px)] gap-0 overflow-y-hidden">
        <div className="hidden lg:flex w-[24.5%]  gap-0">
          <SideNav className="w-[32%]" />
          <Nav className="lg:w-[68%]" />
        </div>
        <div className={`lg:w-[75%] w-full overflow-y-auto ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
