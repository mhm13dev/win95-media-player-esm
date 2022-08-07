import React from 'react';
import PropTypes from 'prop-types';
import { FullscreenContextProvider } from '@cassette/core';
import MediaPlayerView from './components/MediaPlayerView';

export class MediaPlayerUI extends React.PureComponent {
  render() {
    const {
      getDisplayText,
      showVideo,
      fullscreenEnabled,
      className,
      dragHandlerClassName,
      style,
      closeClickHandler,
      minimizeClickHandler
    } = this.props;
    return (
      <FullscreenContextProvider fullscreenEnabled={fullscreenEnabled}>
        <MediaPlayerView
          getDisplayText={getDisplayText}
          showVideo={showVideo}
          fullscreenEnabled={fullscreenEnabled}
          className={className}
          dragHandlerClassName={dragHandlerClassName}
          style={style}
          closeClickHandler={closeClickHandler}
          minimizeClickHandler={minimizeClickHandler}
        />
      </FullscreenContextProvider>
    );
  }
}

MediaPlayerUI.propTypes = {
  getDisplayText: PropTypes.func.isRequired,
  showVideo: PropTypes.bool.isRequired,
  fullscreenEnabled: PropTypes.bool.isRequired,
  className: PropTypes.string,
  dragHandlerClassName: PropTypes.string,
  style: PropTypes.object,
  minimizeClickHandler: PropTypes.func,
  closeClickHandler: PropTypes.func
};

MediaPlayerUI.defaultProps = {
  getDisplayText(track) {
    if (!track) {
      return '';
    }
    return track.title || track.artist || track.album || '';
  },
  showVideo: false,
  fullscreenEnabled: false
};
