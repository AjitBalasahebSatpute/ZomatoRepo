package com.Zomato.CityListAPI.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.extern.slf4j.Slf4j;

@Entity
@Table(name="Master_City")
@Slf4j
public class CityModel {
	
	@Id
	int pinCode;
	public CityModel(int pinCode, String cityName) {
		super();
		this.pinCode = pinCode;
		this.cityName = cityName;
	}
	public CityModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getPinCode() {
		return pinCode;
	}
	public void setPinCode(int pinCode) {
		this.pinCode = pinCode;
	}
	public String getCityName() {
		return cityName;
	}
	public void setCityName(String cityName) {
		this.cityName = cityName;
	}
	String cityName;
	
}
