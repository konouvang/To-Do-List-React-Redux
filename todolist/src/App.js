import React from 'react';


class App extends Comment() {
  state ={
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 1, content: 'play some mario kart'}
    ]
  }
  render() {
    return (
      <div className="App">
      
      </div>
    )
  }

}

export default App;
