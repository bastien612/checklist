package com.laboratoire.checklist;

import org.flywaydb.core.Flyway;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
@EnableJpaAuditing
public class Application {

    @GetMapping("/hello")
    String home() {
        return "Hello";
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
