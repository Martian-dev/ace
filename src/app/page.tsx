import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-7xl">Welcome to Ace</h1>
          <p className="text-lg">The best way to manage your projects</p>
          <Link href="/dashboard">
            <Button className="bg-gray-900 text-white transition-transform hover:scale-105 hover:bg-slate-900">
              Start cooking 🍳
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
