import React, {
  Component
} from 'react';
import './App.css';
import ItemList from '../item-list/item-list'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 0, item: 'Old AM radio.', reason: 'Hear crackles in the summer.' },
        { id: 1, item: 'Shovel', reason: 'Becasue i hate telephone wires.' },
        { id: 2, item: '2m/70cm dueal band transceiver', reason: 'Because MORE RADIOS!!' }
      ],
    }
  }
  render() {
    return (
      <div className="App" >
        MORE COMPONENTS!!!
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;