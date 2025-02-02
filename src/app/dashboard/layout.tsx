// import SideNav from "~/components/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex h-screen w-full flex-grow">
      {/* <SideNav /> */}
      {children}
    </section>
  );
}
