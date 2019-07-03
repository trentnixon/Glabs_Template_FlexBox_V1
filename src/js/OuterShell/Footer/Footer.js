import React from 'react';
import {GA} from "../../../actions/ga";
/*import GlabsContainer from "../Body/InnerContainer";
import PartnerZone from  "./Components/CTA";
import ShareOptions from "./Components/SocialContainer";
*/
function Footer(props){

    return(
        <div id="Footer" >
            <h3>
              {props.PartnerZone.PartnerZoneFooter + ' '}  
              <a  
                  href={props.PartnerZone.PartnerZoneURL} 
                  className="ReadMore" 
                  onClick={()=>{GA('Link Clicked','Footer - PartnerZone',props.PartnerZone.PartnerZoneURL)} }
                > 
                  {props.PartnerZone.PartnerZoneLabel}
              </a>
            </h3>
            <div className="InnerFooter">
                {
                    props.UI.PartnerZoneLinks.map((Link,i)=>{
                        return(
                            <div key={i} className="PartnerZoneLinks">
                              <a href={Link.URL}  onClick={()=>{GA('Link Clicked','Footer - PartnerZone',props.PartnerZone.PartnerZoneURL)}} > 
                                {Link.Label} 
                              </a>
                            </div>
                        
                        )
                    })
                  }
            </div>
        </div>
    )
}
export default Footer;