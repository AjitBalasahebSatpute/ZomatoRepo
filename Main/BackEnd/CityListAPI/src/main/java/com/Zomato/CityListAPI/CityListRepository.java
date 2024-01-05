package com.Zomato.CityListAPI;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Zomato.CityListAPI.Model.CityModel;

@Repository
public interface CityListRepository extends JpaRepository<CityModel, Integer> {

}
