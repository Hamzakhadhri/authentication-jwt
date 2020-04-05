package com.tutorial.login.service.impl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.DependsOn;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tutorial.exception.MyException;
import com.tutorial.login.entity.User;
import com.tutorial.login.enums.ResultEnum;
import com.tutorial.login.repository.UserRepository;
import com.tutorial.login.service.UserService;



@Service
@DependsOn("passwordEncoder")
public class UserServiceImpl implements UserService{

	 @Autowired
	 private PasswordEncoder passwordEncoder;
	 @Autowired
	 private  UserRepository userRepository;

	@Override
	public User findOne(String email) {
        return userRepository.findByEmail(email);
		
	}

	@Override
	public Collection<User> findByRole(String role) {
		// TODO Auto-generated method stub
         return userRepository.findAllByRole(role);
	}

	@Override
	public User save(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        try {
            User savedUser = userRepository.save(user);

            // initial Cart
            return userRepository.save(savedUser);

        } catch (Exception e) {
            throw new MyException(ResultEnum.VALID_ERROR);
        }
    }

	 @Override
	    @Transactional
	    public User update(User user) {
	        User oldUser = userRepository.findByEmail(user.getEmail());
	        oldUser.setPassword(passwordEncoder.encode(user.getPassword()));
	        oldUser.setName(user.getName());
	        oldUser.setPhone(user.getPhone());
	        oldUser.setAddress(user.getAddress());
	        return userRepository.save(oldUser);
	    }


}
