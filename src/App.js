import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Component/App/Home';
import Assujetti from './Component/Assujetti';
import NonAssujetti from './Component/NonAssujetti';
import France from './Component/Assujetti/France';
import Foreign from './Component/Assujetti/Foreign';
import Electronic from './Component/NonAssujetti/Electronic';
import UE from './Component/NonAssujetti/UE';
import ForeignUnsubmit from './Component/NonAssujetti/HorsUE';
import FranceUnsubmitUE from './Component/NonAssujetti/UnsubmitUE';
import OSS from './Component/NonAssujetti/OSS';

function App() {
  return (
    <div id="container">
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />

          {/* Routes pour les assujetti */}
          <Route exact path='/assujetti' component={Assujetti} />
          <Route exact path='/France' component={France} />
          <Route exact path='/hors_france' component={Foreign} />

          {/* Routes pour les non assujetti */}
          <Route exact path='/non_assujetti' component={NonAssujetti} />
          <Route exact path='/prestation_electronique_france' component={Electronic} />
          <Route exact path='/UE' component={UE} />
          <Route exact path='/exoneration_tva' component={ForeignUnsubmit} />
          <Route exact path='/OSS' component={OSS} />
          <Route exact path='/UE_non_OSS' component={FranceUnsubmitUE} />

        </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
