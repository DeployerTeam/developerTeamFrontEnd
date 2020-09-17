import React from 'react';
import './Footer.css'
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <footer className="footer">

        <div class="inner">
            <p>@2020 | All rights reserved - by DeployerTeam.</p>
        </div>
      </footer>
    )
  }
}
