import React, { useState, useEffect } from 'react';
import ClientDetails from "../Header/ClientDetails";

let ReturnHeight;

function Header(props){

  let [BottomMargin, SetMargin ] = useState(0);
  //let [ShowSponserTab, SetSponserTab ] = useState("ShowTab");


  useEffect(() => {

    ReturnHeight = document.getElementById('MainTitle').clientHeight;
    ReturnHeight = 2*Math.round(ReturnHeight / 2);
    SetMargin(Math.floor(ReturnHeight/2));
    
  })

return(
  
    <div id="MainTitle" >
        <div className="TitleTab">
          <div className="InnerTitleTab">
            <h1 className="tracking-in-expand">{props.TabHeader}</h1>
          </div>
        </div>
        <div id="TitleContainer" >
            <div  className="Title-Container" style={{marginBottom:-BottomMargin+"px"}}>
              <h1 className="tracking-in-expand">{props.Header}</h1>
              <h1 className="tracking-in-expand">{props.SubHeader}</h1>
          </div>
      </div>
        <div className="SponserTab" style={{bottom:-(BottomMargin+100)+"px"}}>
            <div className={" SponserTabInner"}>
                <ClientDetails Client={props.Client} />
            </div>
        </div>
    </div>
  )
}

export default Header;