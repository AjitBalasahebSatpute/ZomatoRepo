package com.Zomato.CityListAPI.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.Zomato.CityListAPI.CityListRepository;
import com.Zomato.CityListAPI.DTO.CityDTO;
import com.Zomato.CityListAPI.Model.CityModel;

@Service
public class ListServiceImpl implements ListService{
	
	
	@Autowired
	CityListRepository cityRepository;
	
//	@Autowired (required = true)
	CityModel city = new CityModel();

	@Override
	public CityModel addCity(CityDTO cityDTO) {
		try {
			city.setCityName(cityDTO.getCityName());
			city.setPinCode(cityDTO.getPinCode());
			return cityRepository.save(city);
		}
		catch (Exception e){
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<CityModel> getCitys() {
		
		try {
			return cityRepository.findAll();
		}
		catch (Exception e) {
			return null;
		}
	}

}
