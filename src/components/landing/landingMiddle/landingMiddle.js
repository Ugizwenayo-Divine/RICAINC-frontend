import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Skeleton from './middleSkeleton';
import MiddleModal from './middleModal';
import './landingMiddle.css';

class LandingMiddle extends Component {
  constructor() {
    super();
    this.state = {
      allProducts: [],
      show: false,
      product: {},
    };
  }
  viewAll = (data) => {
    this.setState({ show: !this.state.show, product: data });
  };
  handleButtonClick = (pathToMyComponent, data) => {
    this.props.history.push({
      pathname: pathToMyComponent,
      state: { product: data },
    });
  };
  render() {
    const { loading, data } = this.props;
    const token = localStorage.getItem('token');
    const backColor = loading ? 'white' : '#f0f0f0e7';
    return (
      <div>
        <div
          className='displayed-products'
          style={{ backgroundColor: backColor }}
        >
          {!loading && data.length !== 0 ? (
            data.map((dt) => (
              <div className='one-image' key={dt.id}>
                <img
                  alt=''
                  src={dt.image}
                  onClick={() => {
                    this.handleButtonClick('/specification', dt);
                  }}
                />
                {/* <p style={{cursor:'pointer'}} onClick={()=>{this.viewAll(dt)}}><strong>{dt.price}</strong></p> */}
                <p
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    this.viewAll(dt);
                  }}
                >
                  {dt.name} <strong>{dt.price}</strong>
                </p>
                <p
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    this.viewAll(dt);
                  }}
                >
                  View more
                </p>
              </div>
            ))
          ) : (
            <Skeleton />
          )}

          <MiddleModal
            product={this.state.product}
            visibility={this.state.show}
            token={token}
            clicked={this.viewAll}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.search.loading,
  searchErrors: state.search.searchErrors,
  message: state.search.message,
  data: state.search.data,
});
export default connect(mapStateToProps)(withRouter(LandingMiddle));
