import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image"

class App extends Component {
  render() {
    return (
      <div>
        <Image img={'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjmh-WG7ZviAhUoFzQIHfQNCXYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.water-technology.net%2Fprojects%2Fsouth_north%2F&psig=AOvVaw12cP_oCy8Zx3mJQUuGDZtj&ust=1557951822902307'}/>
      </div>
    );
  }
}

export default App;
