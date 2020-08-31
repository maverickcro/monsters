import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';
class App extends React.Component {
  constructor () {
    super();

    this.state = {
      monsters: [
       
      ],
      searchBar: ''
    };
  }

   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
     .then(users=>this.setState({ monsters: users}))
   }

  render() {
    const {monsters, searchBar} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchBar.toLowerCase()));

    return (
      <div className="App">
        <h1>MoNsTeRs</h1>
        <SearchBox 
          placeholder='Search monsters'
          handleChange={e => this.setState({searchBar: e.target.value})}
          />
        <CardList monsters={filteredMonsters} /> 
      </div>
    );
  }
}

export default App;
