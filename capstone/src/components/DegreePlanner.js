import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import { Redirect } from 'react-router';

export default class DegreePlanner extends Component {
  constructor() {
    super();
    this.state = {
      startingQ: "",
      degree: "",
      courseType: "",
      numClasses: "",
      concentration: "",
      search: false
    }
  }
  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  startingQChanged = (e) => {
    this.setState({startingQ: e.target.value});
  }

  degreeChanged = (e) => {
    this.setState({degree: e.target.value});
  }

  courseTypeChanged = (e) => {
    this.setState({courseType: e.target.value});
  }

  numClassesChanged = (e) => {
    this.setState({numClasses: e.target.value});
  }

  concentrationChanged = (e) => {
    this.setState({concentration: e.target.value});
  }


  render(){
    if (this.context.store.getState().user){
      return(
        <div>
          <Navbar store={this.context.store} active="DegreePlanner"/>
          <section className="section">
            <div className="container">
              <h1 className="title has-text-left">
                Degree Planner
              </h1>
            </div>
            <div className="is-divider" />
            <div className="columns">
              <div className="column">
                <div className="container is-fluid">
                <div className="field is-horizontal">
                    <div className="field-label">
                      <label className="label is-medium">Starting Quarter</label>
                    </div>
                    <div className="field-body">
                      <div className="control">
                      <input className="input is-medium is-link is-rounded" type="text" value={this.state.startingQ} onChange={this.startingQChanged}/>
                      </div>
                    </div>
                  </div>
                  <div className="field is-horizontal">
                    <div className="field-label">
                      <label className="label is-medium">Degree</label>
                    </div>
                    <div className="field-body">
                      <div className="control">
                      <div className="select is-medium is-link is-rounded">
                            <select value={this.state.degree} onChange={this.degreeChanged}>
                              <option value="Computer Science">Computer Science</option>
                              <option value="Information Systems">Information Systems</option>
                            </select>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="field is-horizontal">
                      <div className="field-label">
                        <label className="label is-medium">Concentration</label>
                      </div>
                      <div className="field-body">
                        <div className="control">
                          <div className="select is-medium is-link is-rounded">
                          {
                            this.state.degree !== "Information Systems" ?
                            <select value={this.state.concentration} onChange={this.concentrationChanged}>
                              <option value="Software and Systems Development">Software and Systems Development</option>
                              <option value="Theory">Theory</option>
                              <option value="Data Science">Data Science</option>
                              <option value="Database Systems">Database Systems</option>
                              <option value="Artificial Intelligence">Artificial Intelligence</option>
                              <option value="Software Engineering">Software Engineering</option>
                              <option value="Game and Real-Time Systems">Game and Real-Time Systems</option>
                              <option value="Human-Computer Interaction">Human-Computer Interaction</option>
                            </select>
                            :
                            <select value={this.state.concentration} onChange={this.concentrationChanged}>
                              <option value="Business Analysis/Systems Analysis">Business Analysis/Systems Analysis</option>
                              <option value="Business Intelligence">Business Intelligence</option>
                              <option value="Database Administration">Database Administration</option>
                              <option value="IT Enterprise Management">IT Enterprise Management</option>
                              <option value="Standard">Standard</option>
                            </select>
                          }
                          </div>
                        </div>
                      </div>
                    </div>
                  <div className="field is-horizontal">
                    <div className="field-label">
                        <label className="label is-medium"># Courses per Quarter</label>
                    </div>
                     <div className="field-body">
                        <div className="control">
                          <div className="select is-medium is-link is-rounded">
                            <select value={this.state.numCourses} onChange={this.numCoursesChanged}>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </div>
                        </div>
                     </div>
                  </div>
                  <div className="field is-horizontal">
                      <div className="field-label">
                        <label className="label is-medium">Course Type</label>
                      </div>
                      <div className="field-body">
                        <div className="control">
                          <div className="select is-medium is-link is-rounded">
                            <select value={this.state.courseType} onChange={this.courseTypeChanged}>
                              <option value="Computer Science">Computer Science</option>
                              <option value="Information Systems">Information Systems</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="field is-horizontal">
                      <div className="field-label">
                        <label className="label is-medium"></label>
                      </div>
                      <div className="field-body">
                        <div className="control">
                          <button className={"button is-link is-rounded " + this.state.search}>Search</button>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            
             
            </div>
          </section>

        </div>
      )
    }
    return <Redirect to="/login"/>
  }
}
