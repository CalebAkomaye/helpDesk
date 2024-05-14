async function getTickets() {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0,
    },
  });
  console.log(res);

  return res.json();
}

const TicketList = async () => {
  const tickets = await getTickets();
  console.log(tickets);
  return (
    <>
      {tickets.map((ticket) => (
        <div className='card' key={ticket.id}>
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      ))}

      {tickets.length === 0 && <p className='text-center'>Create a ticket</p>}
    </>
  );
};

export default TicketList;
