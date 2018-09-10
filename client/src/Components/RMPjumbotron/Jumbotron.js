import React from "react";


export default class Jumbotron extends React.Component {
  state={
    navbarHeight: 0
  }

  render() {
    return (
      <div style={{ height: 200, clear: 'both', marginTop: this.state.navbarHeight }} className="jumbotron">
        {this.props.children}
      </div>
    )
  }
}