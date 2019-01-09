package com.checklist.product;

import com.checklist.errors.NotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ProductController {

    Logger log = LoggerFactory.getLogger(ProductController.class);

    @Autowired
    private ProductRepository productRepository;

    @RequestMapping("/product")
    public Product getProduct(@RequestParam(value="name", defaultValue="") String name) {
        Product product = productRepository.findByName(name);

        return product;
    }

    @PostMapping("/add/product")
    public Product addProduct(@RequestBody Product produit) throws NotFoundException{
        //log.info("Received request on addProduct");
        //if (produit.getName().equals("")) {
        //    throw new NotFoundException("No product named {" + produit + "}");
        //}

        return productRepository.save(produit);
    }

}
