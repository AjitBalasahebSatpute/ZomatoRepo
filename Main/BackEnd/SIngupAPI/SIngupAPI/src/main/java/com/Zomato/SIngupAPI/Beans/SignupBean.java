package com.Zomato.SIngupAPI.Beans;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Master_User_Data")
public class SignupBean {
	// by Creating account user is agree to our terms and condition.
	String  username;
	@Id
	String Email;
	
	boolean agree;
	
	
	
	
	
	
	
	public SignupBean(String username, String email, boolean agree) {
		super();
		this.username = username;
		Email = email;
		this.agree = agree;
	}




	public boolean isAgree() {
		return agree;
	}




	public void setAgree(boolean agree) {
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
