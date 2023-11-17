import React from "react";
import Link from "next/link";

// Fetching the data funciton
async function getTickets(url) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(url, {
    next: {
      // The data will never be cached and accessed from the server every time
      revalidate: 0,
    },
  });
  return res.json();
}

export default async function TicketList() {
  // Second argument is used to revalidate (update) the data, after a certain amount of seconds
  const tickets = await getTickets("http://localhost:4000/tickets");
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  );
}
