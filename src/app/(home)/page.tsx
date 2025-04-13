import { HydrateClient } from "@/trpc/server";
import { ClientPage } from "./client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function Home() {
  return (
    <HydrateClient>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary fallback={<div>Error...</div>}>
          <ClientPage />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
