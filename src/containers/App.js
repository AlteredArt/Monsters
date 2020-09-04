import React from 'react';
import CardList from '../components/card-list/CardList'
// import {robots} from './robots';
import SearchBox from '../components/search-box/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'


class App extends React.Component {

    constructor(){
        super()
        this.state = {
            robots: [],
            searchfeild: ''
        }
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) =>{
        this.setState({searchfeild: event.target.value})
        }
        
    
    render() {
        const { robots, searchfeild} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfeild.toLowerCase());
        })
        return !robots.length ? 
            <h1>Loading </h1> :
            (
                <div className="tc">
                    <h1 className="f1"> Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        }
    } 


export default App;