package com.checklist;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@RestController
@SpringBootApplication
@EnableJpaAuditing
public class Application {

    @RequestMapping("/hello")
    String home() {
        return "Hello word";
    }

    ConfigurableApplicationContext ctx;

    public static void main(String[] args) {

        SpringApplication.run(Application.class, args);

    }

    /*@PostMapping("quit")
    public void stopApp() {

        SpringApplication.exit(this.ctx, () -> 0);
    }*/
}
