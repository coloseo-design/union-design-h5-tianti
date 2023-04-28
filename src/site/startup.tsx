/* eslint-disable */
import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom';
import { BasePageComponent } from './utils';
import IframeComponent from './utils/pages';
import Layout, { menus } from './layout';

const BaseComponent: React.FC<RouteComponentProps<{}>> = (props) => {
  /* eslint react/prop-types: 0 */
  const { match: { params: { name } } } = props;
  return <BasePageComponent name={name} />;
};

const BaseComponentI: React.FC<any> = (BasC: any) => (props: any) => {
  const { match: { params: { name } } } = props;
  return <BasC name={name} />
};

const Startup = () => (
  <Router>
          <Switch>
     <Route path="/iframe/:name" component={BaseComponentI(IframeComponent)} />
    <Layout menus={menus}>
        <Route path="/develop/components/:name" component={BaseComponent} />
    </Layout>
    </Switch>
  </Router>
);

export default Startup;
