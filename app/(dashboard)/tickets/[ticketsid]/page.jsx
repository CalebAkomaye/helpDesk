import { metadata } from '@/app/layout';
import { notFound } from 'next/navigation';

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const id = params.ticketsid;

  const res = await fetch(`http://localhost:4000/tickets/${id}`);
  const ticket = await res.json();

  return {
    title: `Help Desk | ${ticket.title}`,
  };
}

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/tickets');

  const tickets = await res.json();

  return tickets.map((ticket) => ({ ticketsid: ticket.id }));
}

async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

const Details = async ({ params }) => {
  const ticketsid = params.ticketsid;
  const ticket = await getTicket(ticketsid);
  return (
    <main>
      <nav>
        <h2>Tickets Details</h2>
      </nav>
      <div className='card'>
        <h3>{ticket.title}</h3>
        <small>created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>{ticket.priority}</div>
      </div>
    </main>
  );
};

export default Details;
