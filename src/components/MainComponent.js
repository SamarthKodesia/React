import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './menuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../components/shared/dishes';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    console.log("clicked");
  }

  render() {

    const HomePage = () => {
      return(
          <Home />
      );
    }


    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;