package com.tutorial.login.service;

import java.util.Collection;

import com.tutorial.login.entity.User;


public interface UserService {
	 
		User findOne(String email);

	    Collection<User> findByRole(String role);

	    User save(User user);

	    User update(User user);
}
