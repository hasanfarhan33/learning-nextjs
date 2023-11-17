"use client";
import React from "react";
import CreateForm from "./CreateForm";

export default function CreateTicket() {
  return (
    <main className="text-center">
      <h2 className="text-primary">Add a New Ticket</h2>
      <CreateForm></CreateForm>
    </main>
  );
}
