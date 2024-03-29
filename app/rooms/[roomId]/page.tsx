import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getRoom } from "@/data/room";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import DevFinder from "./video-player";

const RoomPage = async (props: { params: { roomId: string } }) => {
  const roomId = props.params.roomId;
  const room = await getRoom(roomId);
  if (!room) {
    return <div>No room of this ID found</div>;
  }
  const language = room.language.split(",").map((lang) => lang.trim());
  return (
    <div className="grid grid-cols-4 min-h-screen">
      <div className="col-span-3 p-4">
        <Card className="shadow-sm">
          <CardContent className="text-2xl items-center justify-center p-4">
            <DevFinder room={room} />
          </CardContent>
        </Card>
      </div>
      <div className=" col-span-1 p-4">
        <Card className="shadow-sm">
          <CardHeader className="justify-center items-center gap-4">
            <CardTitle className="text-base">{room?.name}</CardTitle>
            <CardDescription>{room?.description}</CardDescription>
          </CardHeader>
          <CardContent className="text-2xl items-start justify-center p-4 gap-4 flex flex-col">
            <div className="flex flex-wrap gap-2">
              {language.map((lang) => (
                <Badge key={lang} className="w-fit">
                  {lang}
                </Badge>
              ))}
            </div>
            {room.githubRepo && (
              <Button asChild variant="link">
                <Link
                  href={room.githubRepo}
                  className=" flex items-center gap-2 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  Github Project
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoomPage;
