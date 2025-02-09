import SideBar from "~/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex h-full w-full flex-grow">
      <SideBar />
      {children}
    </section>
  );
}
