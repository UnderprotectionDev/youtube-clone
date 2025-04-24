"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { trpc } from "@/trpc/client";
import { CommentForm } from "@/modules/comments/ui/components/comment-form";
import { CommentItem } from "@/modules/comments/ui/components/comment-item";

interface CommentsSectionProps {
  videoId: string;
}

export function CommentsSection({ videoId }: CommentsSectionProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary fallback={<div>Error</div>}>
        <CommentsSectionSuspense videoId={videoId} />
      </ErrorBoundary>
    </Suspense>
  );
}

const CommentsSectionSuspense = ({ videoId }: CommentsSectionProps) => {
  const [comments] = trpc.comments.getMany.useSuspenseQuery({
    videoId,
  });

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-6">
        <h1>0 Comments</h1>
        <CommentForm videoId={videoId} />
        <div className="flex flex-col gap-4 mt-2">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};
