import React, { Component } from "react";

import { Link } from "react-router-dom";

class buyerDash extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-sm-6">
            <div class="jumbotron">
              <h1 class="display-4">Hello Calvin</h1>
              <p class="lead">Welcome to your personalized dashboard!</p>
              <hr class="my-4" />
              <p>
                Here, you will be able to upload and edit necessary documents
                and keep track of your progress.
              </p>
            </div>
          </div>

          <div class="col-sm-6 mt-4">
            <div className="regular-container mr-5">
              <h2 class="progressTitle">Progress tracker</h2>
              <hr class="my-4" />
              <h6 class="progressTrackerType mt-4">Mortgage progress</h6>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped bg-success progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "50%" }}
                >
                  Progress: 50%
                </div>
              </div>
              <h6 class="progressTrackerType mt-4">Attorney progress</h6>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped bg-success progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "20%" }}
                >
                  Progress: 20%
                </div>
              </div>
              <h6 class="progressTrackerType mt-4">Home Inspection progress</h6>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped bg-success progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "90%" }}
                >
                  Progress: 90%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h3 class="progressTrackerType">Alerts</h3>
            <div class="alert alert-danger m-left" role="alert">
              Due Dilligence Payment Missing, Missing
            </div>
            <div class="alert alert-danger m-left" role="alert">
              Residential Property Disclosures, Missing
            </div>
            <div class="alert alert-danger m-left" role="alert">
              Mineral Oil & Gas Rights, Missing
            </div>
            <hr class="my-4" />
            <h5 class="progressTrackerType">Messeges</h5>
            <div class="alert alert-primary m-left" role="alert">
              Home Inspection Scheduled
            </div>
            <div class="alert alert-primary m-left" role="alert">
              Offer to Purchase, Updated
            </div>
          </div>
        </div>
        <div class="container-fluid text-center bg-grey mt-5 mb-5">
          <div class="row text-center">
            <div class="col-sm-2"></div>
            <div class="col-sm-3">
              <div class="listItems">
                <h5 class="listTitle">Contracts</h5>
                <ul class="list-group">
                  <li class="list-group-item list-group-item-success">
                    Cras justo odio
                  </li>
                  <li class="list-group-item list-group-item-success">
                    Dapibus ac facilisis in
                  </li>
                  <li class="list-group-item list-group-item-success">
                    Morbi leo risus
                  </li>
                  <li class="list-group-item">Porta ac consectetur ac</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                  <li class="list-group-item">Cras justo odio</li>
                  <li class="list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item">Morbi leo risus</li>
                  <li class="list-group-item">Porta ac consectetur ac</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
              <div class="input-group mt-3 mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupFileAddon01">
                    Upload
                  </span>
                </div>
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                  />
                  <label class="custom-file-label" for="inputGroupFile01">
                    Choose file
                  </label>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="listItems">
                <h5 class="listTitle">Forms</h5>
                <ul class="list-group">
                  <li class="list-group-item list-group-item-success">
                    Cras justo odio
                  </li>
                  <li class="list-group-item list-group-item-success">
                    Dapibus ac facilisis in
                  </li>
                  <li class="list-group-item list-group-item-success">
                    Morbi leo risus
                  </li>
                  <li class="list-group-item list-group-item-success">
                    Porta ac consectetur ac
                  </li>
                  <li class="list-group-item list-group-item-success">
                    Vestibulum at eros
                  </li>
                  <li class="list-group-item list-group-item-success">
                    Cras justo odio
                  </li>
                  <li class="list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item">Morbi leo risus</li>
                  <li class="list-group-item">Porta ac consectetur ac</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
              <div class="input-group mt-3 mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupFileAddon01">
                    Upload
                  </span>
                </div>
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                  />
                  <label class="custom-file-label" for="inputGroupFile01">
                    Choose file
                  </label>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="listItems">
                <h5 class="listTitle">Personal Information</h5>
                <ul class="list-group">
                  <li class="list-group-item list-group-item-success">
                    Cras justo odio
                  </li>
                  <li class="list-group-item list-group-item-success">
                    Dapibus ac facilisis in
                  </li>
                  <li class="list-group-item list-group-item-success">
                    Morbi leo risus
                  </li>
                  <li class="list-group-item">Porta ac consectetur ac</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                  <li class="list-group-item">Cras justo odio</li>
                  <li class="list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item">Morbi leo risus</li>
                  <li class="list-group-item">Porta ac consectetur ac</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
              <div class="input-group mt-3 mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupFileAddon01">
                    Upload
                  </span>
                </div>
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                  />
                  <label class="custom-file-label" for="inputGroupFile01">
                    Choose file
                  </label>
                </div>
              </div>
            </div>
            <div class="col-sm-2"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default buyerDash;
