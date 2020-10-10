import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import BonuSkeleton from './displaySkeleton';
import AdminNavbar from '../admin-navbar/admin-navbar';
import bonusActions from '../../actions/bonus/bonusActions';

const { displayBonus, deleteBonus } = bonusActions;

class AllBonus extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    console.log('didid');
    const { displayBonus } = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: user });
    displayBonus();
  }
  componentWillReceiveProps(nextProps) {
    const alertMessage =
      nextProps.bonusErrors && toast.error(nextProps.bonusErrors);

    return !nextProps.loading && alertMessage;
  }
  handledelete = (id) => {
    this.props.deleteBonus(id);
  };
  render() {
    const { loading, bonuses } = this.props;
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token) {
      return <Redirect to='/login' />;
    }
    if (user.type === 'client') {
      return <Redirect to='/' />;
    }

    return (
      <div style={{ width: '100%' }}>
        <div className='container'>
          <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '700px' }}
          />
          <AdminNavbar />
          <div className='table-responsive-md' style={{ marginTop: '5.8%' }}>
            <nav
              className='navbar navbar-light'
              style={{ width: '100%', marginLeft: '0%' }}
            >
              <h4
                style={{
                  color: '#8f8d8d',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                Rica Bonus
              </h4>
            </nav>
            {!loading && bonuses ? (
              <table
                style={{
                  width: '50%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                className='table table-bordered table-hover table-sm'
              >
                <thead className='thead-dark'>
                  <tr>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {bonuses.map((dt) => (
                  <tbody key={dt.id}>
                    <tr>
                      <td>{dt.name}</td>
                      <td>
                        <button
                          type='button'
                          className='btn btn-danger py-0 mr-sm-2'
                          // style={{width:'35%'}}
                          onClick={() => {
                            this.handledelete(dt.id);
                          }}
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            ) : (
              <BonuSkeleton />
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({
  displayBonus: { loading, bonuses },
  deleteBonus: { bonusErrors, message },
}) => {
  console.log('bbb', bonuses, loading);
  return {
    loading,
    message,
    bonusErrors,
    bonuses,
  };
};
export default connect(mapStateToProps, {
  displayBonus,
  deleteBonus,
})(AllBonus);
