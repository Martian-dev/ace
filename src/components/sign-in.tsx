"use client";

import { SignIn } from "@clerk/nextjs";
import { Card, CardContent } from "~/components/ui/card";

export function SignInComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-800">
      <Card className="border-slate-700 bg-slate-800">
        <CardContent className="p-4">
          <SignIn />
        </CardContent>
      </Card>
    </div>
  );
}
