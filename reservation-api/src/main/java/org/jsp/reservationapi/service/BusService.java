package org.jsp.reservationapi.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.jsp.reservationapi.dao.AdminDao;
import org.jsp.reservationapi.dao.BusDao;
import org.jsp.reservationapi.dto.Admin;
import org.jsp.reservationapi.dto.Bus;
import org.jsp.reservationapi.dto.ResponseStructure;
import org.jsp.reservationapi.exception.IdNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class BusService {
	@Autowired
	private BusDao busdao;
	
	@Autowired
	private AdminDao dao;
	
	public ResponseEntity<ResponseStructure<Bus>> saveBus(Bus bus, int admin_id){
		Optional<Admin> recAdmin = dao.findById(admin_id);
		ResponseStructure<Bus> structure = new ResponseStructure<>();
		if(recAdmin.isPresent()) {
			Admin a = recAdmin.get();
			a.getBuses().add(bus);
			bus.setAdmin(a);
			dao.updateAdmin(a);
			busdao.saveBus(bus);
			structure.setData(bus);
			structure.setMessage("Bus Added");
			structure.setStatusCode(HttpStatus.CREATED.value());
			return new ResponseEntity<ResponseStructure<Bus>>(structure, HttpStatus.CREATED);
		}
		throw new IdNotFoundException();
	}
	
	public ResponseEntity<ResponseStructure<Bus>> updateBus(Bus bus, int admin_id){
		Optional<Admin> recAdmin = dao.findById(admin_id);
		ResponseStructure<Bus> structure = new ResponseStructure<>();
		if(recAdmin.isPresent()) {
			Admin a = recAdmin.get();
			a.getBuses().add(bus);
			bus.setAdmin(a);
			dao.updateAdmin(a);
			busdao.updateBus(bus);
			structure.setData(bus);
			structure.setMessage("Bus Updated");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Bus>>(structure, HttpStatus.ACCEPTED);
		}
		throw new IdNotFoundException();
	}
	
	public ResponseEntity<ResponseStructure<List<Bus>>> filter(String from, String to, LocalDate dop){
		ResponseStructure<List<Bus>> structure = new ResponseStructure<>();
		structure.setData(busdao.filter(from, to, dop));
		structure.setMessage("list of buses");
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<List<Bus>>>(structure, HttpStatus.OK);
	}
	
	

}
