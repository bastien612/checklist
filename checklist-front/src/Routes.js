import React from 'react';
import CalendarPage from 'pages/user/CalendarPage/CalendarPage';
import MapPage from 'pages/user/MapPage/MapPage';
import ProductPage from 'pages/user/ProductPage/ProductPage';
import CreateProductPage from 'pages/user/CreateProductPage/CreateProductPage';
import ConnexionPage from 'pages/user/ConnexionPage/ConnexionPage';
import HomePage from 'pages/user/HomePage/HomePage';
import ConfigPage from 'pages/user/ConfigPage/ConfigPage';
import CategoryListPage from 'pages/user/CategoryListPage/CategoryListPage';
import CreateCategoryPage from 'pages/user/CreateCategoryPage/CreateCategoryPage';
import ProductsListPage from 'pages/user/ProductsListPage/ProductsListPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function Routes(props) {
    return (
        <Router>
            <React.Fragment>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/home" component={HomePage} />
                <Route path="/config" component={ConfigPage} />
                <Route exact path="/category" component={CategoryListPage} />
                <Route exact path="/category/create" component={CreateCategoryPage} />
                <Route path="/calendar" component={CalendarPage} />
                <Route path="/map" component={MapPage} />
                <Route exact path="/connexion" component={ConnexionPage} />
                <Route exact path="/product" component={ProductPage} />
                <Route exact path="/product/create" component={CreateProductPage} />
                <Route exact path="/productsLists" component={ProductsListPage} />
            </React.Fragment>
        </Router>
    );

}