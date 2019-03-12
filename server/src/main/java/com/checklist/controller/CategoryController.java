package com.checklist.controller;

import com.checklist.service.category.CategoryService;
import com.checklist.domain.Category;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RepositoryRestController
public class CategoryController {
    Logger logger = LoggerFactory.getLogger(CategoryController.class);

    @Autowired
    private CategoryService service;

    @PostMapping(
            value = "/categories/add/list")
    public void addSet(@RequestBody List<Category> categories) {
        categories.forEach(category -> service.save(category));
    }
}
