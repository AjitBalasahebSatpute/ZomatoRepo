package com.Zomato.CityListAPI.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Zomato.CityListAPI.DTO.CityDTO;
import com.Zomato.CityListAPI.DTO.ResponseDTO;
import com.Zomato.CityListAPI.Model.CityModel;
import com.Zomato.CityListAPI.Service.ListService;
import com.Zomato.CityListAPI.Service.ListServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/city")
@CrossOrigin
public class ListController {
	
	@Autowired
	ListService service;
//	@Autowired
	ResponseDTO response = new ResponseDTO();
	
	@GetMapping("/check")
	public ResponseEntity<?> check() {
		CityDTO city = new CityDTO(413304, "Padharpur");
		response.setMsg("City Added");
		response.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<>(city,HttpStatus.OK);
	}
	@PostMapping("/add")
	public ResponseEntity<ResponseDTO> addCity(@RequestBody CityDTO city){
		if (service.addCity(city)!= null) {
			response.setMsg("City Added");
			response.setStatusCode(HttpStatus.CREATED.value());
			return new ResponseEntity<ResponseDTO>(response,HttpStatus.OK);
		}
		else {
			//throw exception
			response.setMsg("Error occured!");
			response.setStatusCode(HttpStatus.METHOD_FAILURE.value());
			return new ResponseEntity<ResponseDTO>(response,HttpStatus.FAILED_DEPENDENCY);
		}
	}
	@GetMapping("/get")
	public ResponseEntity<List<CityModel>>getCitys(){
		List<CityModel> temp = service.getCitys();
		System.out.println("got request");
		if(temp!= null && temp.size()>=1) {
			return new ResponseEntity<List<CityModel>>(temp,HttpStatus.OK);
		}
		else {
			//throw exeption
			return new ResponseEntity<List<CityModel>>(temp,HttpStatus.FAILED_DEPENDENCY);
		}
	}
	
}
