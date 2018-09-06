import React from 'react';
import { Jumbotron, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
var cities = require("../utils/cities.json");

function getCountry(){
    let countries = Object.keys(cities);
    return countries;
}
const places = getCountry();
function getOtherOptions() {
    let options = places.map((country, index) => <option key={index} data={country}>{country}</option>)
    return options;
}


function getCities(country){
    if(country){
        let options = cities[country].map((city, index) => <option key={index} data={city}>{city}</option>)
        return options;
    }
    else{
        return <option key={19876} data={"..."}>{"..."}</option>;
    }
}


export default class Example extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            job: "",
            jobType: "",
            country: "",
            city: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }


  render() {
    return (
    <Jumbotron>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="jobField" className="mr-sm-2">Job field</Label>
          <Input type="text" name="job" id="jobField" value={this.state.job} placeholder="Example: Web developer" onChange={this.handleInputChange} />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="jobType" className="mr-sm-2">Job Type</Label>
          <Input type="select" name="jobType" id="jobType" value={this.state.jobType}  onChange={this.handleInputChange}>
            <option>Part-time / Internship</option>
            <option>Full-time</option>
          </Input>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-sm-2">
          <Label for="country" className="mr-sm-2">Country Preferred</Label>
          <Input type="select" name="country" id="country" value={this.state.country}  onChange={this.handleInputChange}>
            {getOtherOptions()}
          </Input>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0  mt-sm-2">
          <Label for="cities" className="mr-sm-2">City Preferred</Label>
          <Input type="select" name="city" id="city" value={this.state.city}  onChange={this.handleInputChange}>
          {getCities(this.state.country)}
          </Input>
        </FormGroup>
        <Button className="mb-2 mr-sm-2 mb-sm-0 mt-sm-2" onClick={this.handleSubmit}>Submit</Button>
      </Form>
      </Jumbotron>
    );
  }
}