import { useEffect } from 'react';
import PropTypes from 'prop-types';

const DisableZoomScroll = ({ children }) => {
  useEffect(() => {
    // Disable pinch zoom
    const htmlElement = document.documentElement;
    htmlElement.style.touchAction = 'manipulation';

    // Disable scroll
    const handleTouchMove = (event) => {
      event.preventDefault();
    };
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Disable double-tap to zoom
    const handleDoubleClick = (event) => {
      event.preventDefault();
    };
    document.addEventListener('dblclick', handleDoubleClick, { passive: false });

    // Disable Ctrl + Scroll zoom
    const handleWheel = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };
    document.addEventListener('wheel', handleWheel, { passive: false });

    // Clean up event listeners
    return () => {
      htmlElement.style.touchAction = '';
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('dblclick', handleDoubleClick);
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return <>{children}</>;
};

DisableZoomScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DisableZoomScroll;