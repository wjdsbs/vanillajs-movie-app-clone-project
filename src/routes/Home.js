import { Component } from "../core/heropy";
import Headline from "../components/Headline";
import Search from "../components/Search";

export default class Home extends Component {
  render() {
    const headline = new Headline().el;
    const search = new Search().el;

    this.el.classList.add("container");
    this.el.append(headline, search);
  }
}
