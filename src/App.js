import { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Menu from "./components/Menu/Menu.js";
import Hotels from "./components/Hotels/Hotels";

class App extends Component {
  hotels = [
    {
      key: 1,
      name: "Villa Italia",
      city: "Bolognia",
      rating: 8.8,
      description:
        "Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut elit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus ",
      image: "",
    },
    {
      key: 2,
      name: "Hotel Spa",
      city: "Florenzia",
      rating: 8.3,
      description:
        "Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut elit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus ",
      image: "",
    },
  ];
  state = { hotels: this.hotels };

  searchHandler(term) {
    console.log("szukaj", term);
    const hotels = [...this.hotels].filter((x) => x.includes(term));
    this.setState({ hotels });
    // przekazane zfunkcji z poziomu nizej
  }
  render() {
    return (
      <div className="App">
        <Header onSearch={(term) => this.searchHandler(term)} />
        <Menu />
        <Hotels hotels={this.state.hotels} />
      </div>
    );
  }
}

export default App;
