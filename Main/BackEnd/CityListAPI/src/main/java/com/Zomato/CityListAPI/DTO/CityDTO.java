package com.Zomato.CityListAPI.DTO;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;


//@Slf4j @Getter @Setter @NoArgsConstructor
public class CityDTO {
	
	int pinCode;
	String cityName;
	
	
	public CityDTO(int pinCode, String cityName) {
		super();
		this.pinCode = pinCode;
		this.cityName = cityName;
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
	

}
