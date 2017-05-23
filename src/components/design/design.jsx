import React from 'react';

import Styles from './design.css';

export const Design = () => {
  return (
    <section className={Styles.design}>
      <img className={Styles.ecailles} src="/assets/scale-colors.svg" alt="Ecailles en couleurs"/>
      <div className={`content row ${Styles.content}`}>
        <div className="col-md-4 col-md-offset-2 col-sm-4 col-sm-offset-2 col-xs-6">
          <h1 className={Styles.title}>Design</h1>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-6">
          <h1 className={`${Styles.title} ${Styles.codeTitle}`}>Code</h1>
        </div>
      </div>
    </section>
  );
}
