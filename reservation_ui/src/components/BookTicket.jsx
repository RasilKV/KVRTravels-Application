import React from 'react'

const BookTicket = () => {
  return (
    <div>
      <div className="ticket-booking">
        <form action="">
          <br />
          <input type="text" placeholder='Ticket Number' />
          <br /><br />
          <input type="text" placeholder='Seat Number' />
          <br /><br />
          <input type="number" placeholder='Number Of Seats' />
          <br /><br />
          <button>Boot Ticket</button>
        </form>
      </div>
    </div>
  )
}

export default BookTicket