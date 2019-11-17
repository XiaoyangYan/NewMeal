package com.unsw.web.mealReco;

import javax.transaction.Transactional;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
@Transactional
@ComponentScan(basePackages = {"com.unsw.web.mealReco.controller"})
@SpringBootApplication(scanBasePackages = "com.unsw.web.mealReco")
public class MealRecoApplication {

	public static void main(String[] args) {
		SpringApplication.run(MealRecoApplication.class, args);
	}

}
