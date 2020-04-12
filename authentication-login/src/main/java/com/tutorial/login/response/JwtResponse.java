package com.tutorial.login.response;

import lombok.Data;

@Data
public class JwtResponse {

	  private String token;
	    private String type = "Bearer";
	    private String account;
	    private String name;
	    private String role;
	    private Boolean status ; 
	    public JwtResponse(String token, String account, String name, String role, Boolean Status ) {
	        this.account = account;
	        this.name = name;
	        this.token = token;
	        this.role = role;
	        this.status=true;
	    }
}
