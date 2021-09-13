import React from 'react';

/**
 * BrainClassifiedVolumes component
 * @return {JSX.Element}
 */
const BrainClassifiedVolumes = () => {
  return (
    <div>
      hello
    </div>
  );
};
BrainClassifiedVolumes.defaultProps = {
  url: {
    base: '',
  },
};

/**
 * Render component on page load.
 */
window.addEventListener('load', () => {
  ReactDOM.render(
    <BrainClassifiedVolumes
      url={{
        base: loris.BaseURL,
      }}
    />,
    document.getElementById('lorisworkspace')
  );
});
