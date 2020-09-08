import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { fetchDesignsAction } from '../../actions/design';
import AdminNavbar from '../admin-navbar/admin-navbar';
import './alldesigns.css';

class AllDesigns extends Component {
  componentWillReceiveProps = (nextProps) => {
    const alertMessage =
      (nextProps.message && toast.success(nextProps.message)) ||
      (nextProps.designErrors && toast.error(nextProps.designErrors));

    return !nextProps.loading && alertMessage;
  };

  componentDidMount() {
    this.props.fetchDesignsAction();
  }

  single = (id) => {
    window.location.replace(`/designs/${id}`);
  };

  render() {
    const { designList } = this.props;
    const designs = designList.map((data) => ({
      id: data.id,
      description: data.description,
      image: data.image,
    }));
    return (
      <div className='container'>
        <div className='Design'>
          <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '700px' }}
          />
          <AdminNavbar />
          <br></br>
          <br></br>
          <div className='designGrid'>
            {designs.map((data) => (
              <div className='DesignList' onClick={() => this.single(data.id)}>
                <img src={data.image} alt=''></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
AllDesigns.propTypes = {
  designErrors: PropTypes.string,
  message: PropTypes.string,
  fetchDesignsAction: PropTypes.func,
};

const mapStateToProps = ({
  designs: { loading, designErrors, message },
  designs: { designs },
}) => ({
  loading,
  designErrors,
  message,
  designList: designs.list,
});

export default connect(mapStateToProps, {
  fetchDesignsAction,
})(AllDesigns);
