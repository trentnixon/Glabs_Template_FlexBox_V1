import React  from 'react';
// Import Layout Components
import OuterShell from "../OuterShell/OuterShell";

// Application
import Application from "../Application/Default/Default";

function Main(props){

  return(
        <OuterShell  {... props} >
          <Application App={props.APP.APPLICATION} />
        </OuterShell>
      )
  }

export default Main;