"use client";

import { InfiniteScroll } from "@/components/infinite-scroll";
import { DEFAULT_LIMIT } from "@/constants";
import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function VideosSection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary fallback={<div>Error</div>}>
        <VideosSectionSuspense />
      </ErrorBoundary>
    </Suspense>
  );
}

function VideosSectionSuspense() {
  const router = useRouter();
  const [videos, query] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    {
      limit: DEFAULT_LIMIT,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  return (
    <div>
      <div className="border-y">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-6 w-[510px]">Video</TableHead>
              <TableHead>Visibility</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Views</TableHead>
              <TableHead className="text-right">Comments</TableHead>
              <TableHead className="text-right pr-6">Likes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {videos.pages.flatMap((page) =>
              page.items.map((video) => (
                <TableRow
                  key={video.id}
                  className="cursor-pointer"
                  onClick={() => router.push(`/studio/videos/${video.id}`)}
                >
                  <TableCell className="pl-6 w-[510px]">
                    {video.title}
                  </TableCell>
                  <TableCell>visibility</TableCell>
                  <TableCell>status</TableCell>
                  <TableCell>date</TableCell>
                  <TableCell className="text-right">views</TableCell>
                  <TableCell className="text-right">comments</TableCell>
                  <TableCell className="text-right pr-6">likes</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <InfiniteScroll
        isManual
        hasNextPage={query.hasNextPage}
        isFetchingNextPage={query.isFetchingNextPage}
        fetchNextPage={query.fetchNextPage}
      />
    </div>
  );
}
