package com.notesmanager.product;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    @RequestMapping("/product")
    public ProductModel getProduct(@RequestParam(value="name", defaultValue="") String name) {
//        Integer idInt;
//        try {
//            idInt = Integer.parseInt(id);
//        } catch ParseException e {
//            return "Error";
//        }

        return new ProductModel("Saumon");
    }

}
