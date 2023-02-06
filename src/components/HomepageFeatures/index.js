import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Electrical RT',
    usermanual: (
      <Link to="https://www.designmaster.biz/docs/elecrt/">
            User Manual
      </Link>
    ),
    tutorial: (
      <Link to="docs/electricalrt/tutorials">
            Tutorial
      </Link>
    ),
  },
  {
    title: 'HVAC',
    usermanual: (
      <Link to="https://www.designmaster.biz/docs/hvac/">
            User Manual
      </Link>
    ),
    tutorial: (
      <Link to="https://www.designmaster.biz/support/hvac/Tutorials/index.html">
            Tutorial
      </Link>
    ),
  },
  {
    title: 'Photometrics',
    usermanual: (
      <Link to="https://www.designmasterphotometrics.com/docs/">
            User Manual
      </Link>
    ),
    tutorial: (
      <Link to="https://www.designmasterphotometrics.com/tutorial/">
            Tutorial
      </Link>
    ),
  },
  {
    title: 'Electrical',
    usermanual: (
      <Link to="https://www.designmaster.biz/docs/elec/">
            User Manual
      </Link>
    ),
    tutorial: (
      <Link to="https://www.designmaster.biz/support/electrical/Tutorials/index.html">
            Tutorial
      </Link>
    ),
  },
  {
    title: 'Plumbing',
    usermanual: (
      <Link to="https://www.designmaster.biz/docs/plumb/">
            User Manual
      </Link>
    ),
    tutorial: (
      <></>
    ),
  },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({title, usermanual, tutorial}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{usermanual}</p>
        <p>{tutorial}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
