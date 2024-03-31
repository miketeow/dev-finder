import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Room } from "@/db/schema";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
import { TagList } from "./tag-list";
import { splitTags } from "@/lib/utils";

const RoomCard = ({ room }: { room: Room }) => {
  const tag = splitTags(room.tags);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.name}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <TagList tags={tag} />
        {room.githubRepo && (
          <Link
            href={room.githubRepo}
            className=" flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            Github Project
          </Link>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/rooms/${room.id}`}>Join Room</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
