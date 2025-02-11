import { Header } from "~/components/header";
import SideBar from "~/components/sidebar";

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <section className="flex h-full w-full flex-grow">
      <SideBar />
      <div className="flex h-full w-full flex-col">
        <Header />
        {children}
        {modal}
      </div>
    </section>
  );
}
