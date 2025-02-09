import { Header } from "~/components/header";

export default function Dashboard() {
  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <main className="p-6">
        <h1 className="mb-6 text-2xl font-semibold">Today</h1>
      </main>
    </div>
  );
}
