import React, { Component, Fragment } from "react";
import Drop from "./dropdown";
import LineChart from "./LineChart";

export default class Dashboard extends Component {

constructor(){
    super()
this.state={
    numDashboard:null
}
}

paginate = number => {
    console.log(number)
    this.setState({
      numDashboard:number
    });
  };

  render() {
      {if(this.state.numDashboard!=null){
        return (
            <Fragment>
              <div className="row">
                <div className="col">
                    <div className="row">
                  <div
                    className="col align-items-center d-flex flex-wrap"
                    style={{
                      background: "#5fa9d6",
                      height: "150px",
                      justifyContent: "center"
                    }}
                  >
                    <Drop paginate={this.paginate}/>
                  </div>
                  </div>
      
                  <div className="row">
                      <LineChart numDashboard={this.state.numDashboard}/>
                      <LineChart numDashboard={this.state.numDashboard}/>
                      <LineChart numDashboard={this.state.numDashboard}/>
                  </div>
                 
                </div>
              </div>
            </Fragment>
          );
      }
    else{
        return (
            <Fragment>
              <div className="row">
                <div className="col">
                    <div className="row">
                  <div
                    className="col align-items-center d-flex flex-wrap"
                    style={{
                      background: "#5fa9d6",
                      height: "150px",
                      justifyContent: "center"
                    }}
                  >
                    <Drop paginate={this.paginate}/>
                  </div>
                  </div>
                 
                </div>
              </div>
            </Fragment>
          );
    }
    }

      
   
  }
}
