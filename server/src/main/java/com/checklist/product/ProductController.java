package com.checklist.product;

import com.checklist.errors.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @RequestMapping("/product")
    public Product getProduct(@RequestParam(value="name", defaultValue="") String name) {
        Product product = productRepository.findByName(name);

        return product;
    }

    @RequestMapping(value="/add/product", method= RequestMethod.POST)
    public String addProduct(@RequestParam(value="name", defaultValue="") String name) throws NotFoundException{
        log.info("Received request on addProduct");
        if (name.equals("")) {
            throw new NotFoundException("No product named {" + name + "}");
        }

        Product product = new Product(name);
        productRepository.save(product);
        return "Ok";
    }

}
