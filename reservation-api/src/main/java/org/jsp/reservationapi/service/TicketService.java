package org.jsp.reservationapi.service;

import java.util.Optional;

import org.jsp.reservationapi.dao.BusDao;
import org.jsp.reservationapi.dao.TicketDao;
import org.jsp.reservationapi.dao.UserDao;
import org.jsp.reservationapi.dto.Bus;
import org.jsp.reservationapi.dto.EmailConfiguration;
import org.jsp.reservationapi.dto.ResponseStructure;
import org.jsp.reservationapi.dto.Ticket;
import org.jsp.reservationapi.dto.User;
import org.jsp.reservationapi.exception.IdNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class TicketService {
	@Autowired
	private TicketDao ticketDao;
	@Autowired
	private UserDao userDao;
	@Autowired
	private BusDao busDao;
	@Autowired
	private ReservationApiEmailService service;
	@Autowired
	private EmailConfiguration configuration;
	
	public ResponseEntity<ResponseStructure<Ticket>> saveTicket(Ticket ticket, int user_id, int bus_id){
		Optional<Bus> recBus = busDao.findById(bus_id);
		Optional<User> recUser = userDao.findById(user_id);
		ResponseStructure<Ticket> structure = new ResponseStructure<>();
		if(recBus.isPresent() && recUser.isPresent()) {
			Bus b = recBus.get();
			User u = recUser.get();
			ticket.setCost(ticket.getNumber_of_seats()*b.getCost_per_seat());
			b.getTickets().add(ticket);
			u.getTickets().add(ticket);
			ticket.setBus(b);
			ticket.setUser(u);
			configuration.setTo(u.getEmail());
			configuration.setSubject("Confirmation on ticket booking");
			configuration.setText("number of seats booked: "+ticket.getNumber_of_seats()+"\n"+"seat number: "
					+ticket.getSeat_no()+"\nbus number: "+ b.getBus_no()+"\nTotal Cost: "+ticket.getCost());
			String message = service.sendEmail(configuration);
			structure.setData(ticketDao.saveTicket(ticket));
			busDao.updateBus(recBus.get());
			userDao.updateUser(recUser.get());
			structure.setMessage(message);
			structure.setStatusCode(HttpStatus.CREATED.value());
			return new ResponseEntity<ResponseStructure<Ticket>>(structure, HttpStatus.CREATED);
		}
		throw new IdNotFoundException();
	}
	
	public ResponseEntity<ResponseStructure<Ticket>> updateTicket(Ticket ticket, int user_id, int bus_id){
		Optional<Bus> recBus = busDao.findById(bus_id);
		Optional<User> recUser = userDao.findById(user_id);
		ResponseStructure<Ticket> structure = new ResponseStructure<>();
		if(recBus.isPresent() && recUser.isPresent()) {
			Bus b = recBus.get();
			User u = recUser.get();
			ticket.setCost(ticket.getNumber_of_seats()*b.getCost_per_seat());
			ticket.setBus(b);
			ticket.setUser(u);
			configuration.setTo(u.getEmail());
			configuration.setSubject("Confirmation on ticket booking");
			configuration.setText("number of seats booked: "+ticket.getNumber_of_seats()+"\n"+"seat number: "
					+ticket.getSeat_no()+"\nbus number: "+ b.getBus_no()+"\nTotal Cost: "+ticket.getCost());
			String message = service.sendEmail(configuration);
			structure.setData(ticketDao.updateTicket(ticket));
			busDao.updateBus(recBus.get());
			userDao.updateUser(recUser.get());
			structure.setMessage(message);
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Ticket>>(structure, HttpStatus.ACCEPTED);
		}
		throw new IdNotFoundException();
	}
	
	public ResponseEntity<ResponseStructure<String>> deleteTicket(int id){
		Optional<Ticket> recTicket = ticketDao.findById(id);
		ResponseStructure<String> structure = new ResponseStructure<>();
		if(recTicket.isEmpty()) {
			throw new IdNotFoundException();
		}
		else {
			ticketDao.deleteTicket(recTicket.get());
			structure.setData("Booking has been cancelled");
			structure.setMessage("Ticket found");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.OK);
		}
	}
}
