package com.checklist.service.productlist;

import com.checklist.model.ProductList;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductListRepository extends PagingAndSortingRepository<ProductList, Long> {

    @Override
    Optional<ProductList> findById(Long aLong);

    @Override
    List<ProductList> findAll();

    ProductList findByTitle(String name);

}
