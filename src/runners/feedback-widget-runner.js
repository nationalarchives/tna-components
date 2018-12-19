import 'core-js/es6/map';
import 'core-js/es6/set';

import React from "react";
import ReactDOM from "react-dom";
import GuidanceFeedback from '../../components/guidance_feedback/guidance-feedback.react';

{
    let url = window.location.href;
    const wrapper = document.querySelector('.research-guide .col.starts-at-full.ends-at-one-third.clr.box');
    const wrapperIndepth = document.querySelector('.research-guide-indepth .col.starts-at-full.ends-at-one-third.clr.box');
    const regex = /(help-with-your-research)\/(research-guides)/g;

    if(url.match(regex) && wrapper || wrapperIndepth) {
        if(!document.getElementById('guidance-feedback-react')){ 
           
            let div = document.createElement('div');
            div.id = "guidance-feedback-react";

            if( wrapper){
                wrapper.appendChild(div);
            } else if(wrapperIndepth) {
                wrapperIndepth.appendChild(div);
            }
            
            ReactDOM.render(<GuidanceFeedback/>, document.getElementById("guidance-feedback-react"));
        }        
    }
}

