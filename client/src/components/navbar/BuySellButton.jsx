import React, { Component } from "react";
import { BrowserRouter, Route, Link, withRouter, Redirect } from "react-router-dom";
import "./BuySellButton.scss";

// const BuySellButton = (props) => {

//     const handleClick = () => {
//         console.log(props.text);
//       };

//     return (
//         <>
//         <a href='/sell'>
//         <span className="sell" onClick={ handleClick }>{ props.text }</span>
//       </a>
//       </>
//     )
// }

// export default BuySellButton;
class BuySellButton extends Component {
  render() {
    let text,
      { location } = this.props;

    switch (location.pathname) {
      case "/": {
        text = "Start selling";
        break;
      }
      case "/sell": {
        text = "Start buying";
        break;
      }
      default: {
      text = "Start selling";
    }

  }



    return (
      //   <a href="/sell">
    //   <span className="sell">{text}</span>
      <Link to='/sell' className='sell'>{text}</Link>

      //   </a>
    );
  }
}

export default BuySellButton;
