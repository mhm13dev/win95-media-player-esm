import React from 'react';
import { PlayerContextProvider } from '@cassette/core';
import { MediaPlayerUI } from './MediaPlayerUI';

export class MediaPlayer extends React.Component {
  render() {
    const {
      getDisplayText,
      showVideo,
      fullscreenEnabled,
      className,
      dragHandlerClassName,
      style,
      closeClickHandler,
      minimizeClickHandler,
      ...rest
    } = this.props;
    return (
      <PlayerContextProvider {...rest}>
        <MediaPlayerUI
          getDisplayText={getDisplayText}
          showVideo={showVideo}
          fullscreenEnabled={fullscreenEnabled}
          className={className}
          dragHandlerClassName={dragHandlerClassName}
          style={style}
          closeClickHandler={closeClickHandler}
          minimizeClickHandler={minimizeClickHandler}
        />
      </PlayerContextProvider>
    );
  }
}

MediaPlayer.propTypes = {
  ...MediaPlayerUI.propTypes,
  ...PlayerContextProvider.propTypes
};

MediaPlayer.defaultProps = {
  ...MediaPlayerUI.defaultProps,
  ...PlayerContextProvider.defaultProps
};
