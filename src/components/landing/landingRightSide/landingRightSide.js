import React, { Component } from 'react';
import { connect } from 'react-redux';
import announcement from '../../../actions/landing/announcement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import ExternalAdvertisement from './externalAdvertisement/externalAdvertisement';
import RightSideSkeleton from './rightsideSkeleton';
import './landingRightSide.css';

const { getAnnouncements } = announcement;
class LandingRightSide extends Component {
  constructor() {
    super();
    this.state = {
      announcementIndex: 0,
    };
  }
  componentDidMount() {
    const { getAnnouncements, announcements } = this.props;
    if (announcements.length === 0) {
      getAnnouncements();
    }
  }
  handleNext = () => {
    const { announcements } = this.props;
    if (this.state.announcementIndex === announcements.length - 1) {
      this.setState({ announcementIndex: 0 });
    } else {
      this.setState({ announcementIndex: this.state.announcementIndex + 1 });
    }
  };
  handlePrevious = () => {
    const { announcements } = this.props;
    if (this.state.announcementIndex === 0) {
      this.setState({ announcementIndex: announcements.length - 1 });
    } else {
      this.setState({ announcementIndex: this.state.announcementIndex - 1 });
    }
  };
  render() {
    const { announcements, loading } = this.props;
    const spanColor = loading ? '#f0f0f0e7' : 'grey';
    return (
      <div>
        <div className='all-announcement'>
          <h3 style={{ color: spanColor }}>Announcements</h3>
          <span
            className='right-previous'
            style={{ color: spanColor }}
            onClick={this.handlePrevious}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </span>
          {!loading && announcements.length !== 0 ? (
            <div className='one-announcement'>
              <h4>{announcements[this.state.announcementIndex].title}</h4>
              <div style={{ fontWeight: '500' }}>
                {announcements[this.state.announcementIndex].announcement}
              </div>
            </div>
          ) : (
            <RightSideSkeleton />
          )}
          <span
            className='right-next'
            style={{ color: spanColor }}
            onClick={this.handleNext}
          >
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </span>
        </div>
        <ExternalAdvertisement />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.announcement.loading,
    announcementErrors: state.announcement.announcementErrors,
    message: state.announcement.message,
    announcements: state.announcement.announcements,
  };
};
export default connect(mapStateToProps, { getAnnouncements })(LandingRightSide);
