package com.Zomato.SIngupAPI.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Zomato.SIngupAPI.Beans.SignupBean;


@Repository
public interface SignupRepo extends JpaRepository<SignupBean, String> {

}
