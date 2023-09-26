package org.jsp.reservationapi.dao;

import java.util.Optional;

import org.jsp.reservationapi.dto.User;
import org.jsp.reservationapi.repository.UserRepoository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {
	@Autowired
	private UserRepoository repoository;
	
	public User saveUser(User u) {
		return repoository.save(u);
	}
	
	public User updateUser(User u) {
		return repoository.save(u);
	}
	
	public Optional<User> findById(int id){
		return repoository.findById(id);
	}
	
	public Optional<User> verifyUser(String email, String password){
		return repoository.verifyUser(email, password);
	}

}
