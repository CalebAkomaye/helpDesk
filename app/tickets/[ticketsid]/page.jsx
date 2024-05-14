async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  console.log(res);

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
