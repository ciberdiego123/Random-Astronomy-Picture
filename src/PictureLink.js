import React from 'react';

export default class PictureLink extends React.Component {        

  constructor(props) {
    super(props);
    this.apod = "";
    this.state = {
      render: false 
    }
    this.onGeneratePictureLink();
  }

  render() {
    return this.apod === "" ? (<span>Loading picture link...</span>) : 
      (<a
          className="App-link"
          href={this.apod}
          target="_blank"
          rel="noopener noreferrer"
        >
            Random Astronomy Picture
        </a>
      );
  }

  onGeneratePictureLink=()=>{
    let nasaAPODUrl = 'https://api.nasa.gov/planetary/apod?api_key=teiQ9tQnpMwYAkL2pHG9FiEVH3NM6Sul8Dl0lgc1&count=1';                
    fetch(nasaAPODUrl, {
        method: 'GET',
        headers: {                
            'Content-Type': 'application/json'                                
        }          
    })
    .then(response => {            
        console.log('Get Request Executed');
        console.log(response);
        if(response.ok){
            const jsonPromise = response.json();
            jsonPromise.then(data => {                    
                console.log("Picture URL ", data[0].url); 
                this.apod = data[0].url;                                   
                this.setState({
                  render: true 
                });
            })
        }
    })
    .catch(error =>{
        console.log('ERROR executing Get Request');            
        console.log(error);
    });        
}

}