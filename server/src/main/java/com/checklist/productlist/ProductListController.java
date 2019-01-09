package com.checklist.productlist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
public class ProductListController {

    @Autowired
    private ProductListRepository productListRepository;

    @Autowired
    private ProductListServiceImpl service;

    @RequestMapping(
            value="/lists",
            params = {"page", "size"},
            method = RequestMethod.GET)
    public Page<ProductListModel> getProductListModelPage(
        @RequestParam("page")int page, @RequestParam("size")int size
    ) {
        return service.findPaginated(1, 1);
    }

}
