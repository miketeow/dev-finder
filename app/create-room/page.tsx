import CreateRoomForm from "@/components/create-room-form";
import React from "react";

const CreateRoomPage = () => {
  return (
    <div className="container mx-auto flex-col flex gap-8 pt-12 pb-24">
      <h1 className="text-4xl font-bold">Create Room</h1>
      <CreateRoomForm />
    </div>
  );
};

export default CreateRoomPage;
