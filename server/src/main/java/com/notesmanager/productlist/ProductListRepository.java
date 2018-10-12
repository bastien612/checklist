package com.notesmanager.productlist;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductListRepository extends JpaRepository<ProductListModel, Long> {

    @Override
    Optional<ProductListModel> findById(Long aLong);

    @Override
    List<ProductListModel> findAll();
}
