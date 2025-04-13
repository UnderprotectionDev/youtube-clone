"use client";

import { trpc } from "@/trpc/client";

export function ClientPage() {
  const [data] = trpc.hello.useSuspenseQuery({ text: "Underprotection" });
  return <div>Page client says: {data.greeting}</div>;
}
