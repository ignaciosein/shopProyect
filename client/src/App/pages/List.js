import React, { Component } from 'react';
import axios from "axios"
class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    axios('/api/nacho').then((list) => {   console.log(list.data) ,this.setState({ list:list.data })})

    
  }
  

 
  render() {

    console.log(this.state.list)
 /*    const { list } = this.state; */

    return (
      <div className="App">
      {/*   <h1>List of Items</h1>
 
        {list.length ? (
          <div>
  
            {list.map((item ,i) => {
              return(
                <div key={i}>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      } */}
      </div>
    );
  }
}

export default List;