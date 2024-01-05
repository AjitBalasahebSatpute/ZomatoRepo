package com.Zomato.SIngupAPI.Beans;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= "SingupTransaction")
public class TransactionBean {
	
	public TransactionBean() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getOTP() {
		return OTP;
	}
	public void setOTP(int oTP) {
		OTP = oTP;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	@Id
	String email;
	String username;
	int OTP;
	Date date;
	public TransactionBean(String email, String username, int oTP, Date date) {
		super();
		this.email = email;
		this.username = username;
		OTP = oTP;
		this.date = date;
	}
}
