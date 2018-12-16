const  GuidanceFeedbackGTM = (formID) => {
    return {
        form: document.getElementById(formID),
        elemArr: [],
        dataLay: {},
        getElement(forM, arr) { 
            if(forM) {
                console.log(forM.elements);
                for (let i = 0; i < forM.elements.length; i++) {
                    if (forM[i].nodeName === "TEXTAREA" && forM[i].type === "textarea") {
                        return arr.push(forM[i]);  // update array
                    }
                  }
            }
        },
        buildObj(){
            this.elemArr.filter((el) => {
                this.dataLay.event = 'Feedback';
                this.dataLay.eventCategory= 'Research guides feedback';
                this.dataLay.eventLabel = el.value === '' ? 'No comment made' : el.value ;
                this.dataLay.eventAction = el.id === 'field-no'? 'No' : 'Yes';
                return this.dataLay;
            });
        },
        pushInDataLayer: (obj) => {
            let wd = window.dataLayer || [];
            (!!obj || typeof obj === 'object') ? wd.push(obj) : '';
        
            return obj;
        },
        push(){
            this.getElement(this.form, this.elemArr);
            this.buildObj();
            this.pushInDataLayer(this.dataLay);
        }   
    }
}

export default GuidanceFeedbackGTM;