package com.Zomato.SIngupAPI.DTO;

import jakarta.persistence.Id;

public class SignupDTO {
	
	// by Creating account user is agree to our terms and condition.
	String  username;
	@Id
	String Email;
	
	String agree;
	
	
	
	
	
	
	
	public SignupDTO(String username, String email, String agree) {
		super();
		this.username = username;
		Email = email;
		this.agree = agree;
	}




	public String isAgree() {
		return agree;
	}




	public void setAgree(String agree) {
		this.agree = agree;
	}

	
	
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	

}
