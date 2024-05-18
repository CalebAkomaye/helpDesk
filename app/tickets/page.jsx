import React, { Suspense } from 'react';
import TicketList from './getTickets';

const Tickets = () => {
  return (
    <main>
      <nav>
        <h2>Tickets</h2>
        <p>
          <small>Currently open tickets.</small>
        </p>
      </nav>
      <Suspense>
        <TicketList />
      </Suspense>
    </main>
  );
};

export default Tickets;
