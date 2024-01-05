package com.Zomato.CityListAPI.DTO;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j  @Getter @Setter @NoArgsConstructor
public class ResponseDTO {
	
	int statusCode;
	String msg;
	public int getStatusCode() {
		return statusCode;
	}
	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public ResponseDTO(int statusCode, String msg) {
		super();
		this.statusCode = statusCode;
		this.msg = msg;
	}
	public ResponseDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}

