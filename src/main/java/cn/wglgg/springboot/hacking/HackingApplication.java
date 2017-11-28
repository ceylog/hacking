package cn.wglgg.springboot.hacking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.mybatis.spring.annotation.MapperScan;

@SpringBootApplication
@MapperScan(basePackages = "cn.wglgg.springboot.hacking.dao")
public class HackingApplication {

	public static void main(String[] args) {
		SpringApplication.run(HackingApplication.class, args);
	}
}
