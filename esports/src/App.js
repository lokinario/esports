import React, {
  Component
} from 'react';
import Preloader from './components/Preloader.js';
class App extends Component {
  state = {
    data: []
  }
  render() {
    if (this.state.data.length < 1) {
      return ( <
        Preloader / >
      );
    }
    return ( <
      div className = "App" >

      <
      /div>
    )
  }
}
export default App;