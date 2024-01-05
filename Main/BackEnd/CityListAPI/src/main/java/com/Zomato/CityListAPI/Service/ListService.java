package com.Zomato.CityListAPI.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Zomato.CityListAPI.DTO.CityDTO;
import com.Zomato.CityListAPI.Model.CityModel;



@Service
public interface ListService {
	
	
	public CityModel addCity(CityDTO cityDTO);
	public List<CityModel> getCitys();

}
