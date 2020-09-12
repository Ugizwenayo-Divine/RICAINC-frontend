import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';
import { fetchSingleDesignAction } from '../../actions/design';
// import AdminNavbar from '../admin-navbar/admin-navbar';
import './alldesigns.css';

class SingleDesign extends Component {
  // componentWillReceiveProps = (nextProps) => {
  //   const alertMessage =
  //     (nextProps.message && toast.success(nextProps.message)) ||
  //     (nextProps.designErrors && toast.error(nextProps.designErrors));

  //   return !nextProps.loading && alertMessage;
  // };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.props.fetchSingleDesignAction(id);
  }

  render() {
    // const { SingleDesignList } = this.props;
    // const designs = SingleDesignList.map((SingleDesignList) => ({
    //   id: SingleDesignList.id,
    //   description: SingleDesignList.description,
    //   image: SingleDesignList.image,
    // }));
    return (
      <div className='container'>
        {/* <div className=''>
          <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '700px' }}
          />
          <AdminNavbar />
          <br></br>
          <br></br>
          <div className=''>
            {designs.map((data) => (
              <div className=''>
                <img src={data.image} alt=''></img>
                <p className='labels'>
                  Description <i class='fas fa-info-circle'></i>
                </p>
                <br></br>
                <p>{data.description}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    );
  }
}
SingleDesign.propTypes = {
  designErrors: PropTypes.string,
  message: PropTypes.string,
  fetchSingleDesignAction: PropTypes.func,
};

const mapStateToProps = ({
  designs: { loading, designErrors, message },
  designs: { designs },
}) => ({
  loading,
  designErrors,
  message,
  SingleDesignList: designs.single,
});

export default connect(mapStateToProps, {
  fetchSingleDesignAction,
})(SingleDesign);
