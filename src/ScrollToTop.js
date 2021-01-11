import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  const show = (element) => {
    if (document.getElementById(element) !== null) {
      document.getElementById(element).style.display = "flex";
    }
  };

  show("logo");
  show("menuBtn");

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);
