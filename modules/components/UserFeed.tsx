"use client";

import React from "react";

import UserCard from "./UserCard";
import { useInView } from "react-intersection-observer";
import { useUsers } from "@/hooks/useUsers";
import UserCardSkeleton from "./Skelton";

export default function UserFeed() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isError,
    error,
  } = useUsers();
  const { ref, inView } = useInView();

  // Hooks are always called no matter what:
  React.useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  // Now conditionally return your UI:
  if (isPending)
    return (
      <div className="space-y-4 p-4">
        {/* Render 5 skeletons as placeholders */}
        {[...Array(5)].map((_, i) => (
          <UserCardSkeleton key={i} />
        ))}
      </div>
    );
  if (isError)
    return (
      <div className="text-red-500 text-center">Error: {error?.message}</div>
    );

  return (
    <div className="space-y-4 p-4 w-[70%] m-auto">
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.users.map((user: any) => (
            <UserCard key={user.id} user={user} />
          ))}
        </React.Fragment>
      ))}
      {isFetchingNextPage && (
        <div>
          {[...Array(5)].map((_, i) => (
            <UserCardSkeleton key={i} />
          ))}
        </div>
      )}
      <div ref={ref} />
    </div>
  );
}
