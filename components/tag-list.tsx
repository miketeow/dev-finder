"use client";
import React from "react";
import { Badge } from "./ui/badge";
import { useRouter } from "next/navigation";

export function TagList({ tags }: { tags: string[] }) {
  const router = useRouter();
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge
          tabIndex={0}
          role="button"
          key={tag}
          className="w-fit cursor-pointer"
          onClick={() => {
            router.push(`/?search=${tag}`);
          }}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}
