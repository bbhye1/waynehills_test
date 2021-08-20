import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './HomePage';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
