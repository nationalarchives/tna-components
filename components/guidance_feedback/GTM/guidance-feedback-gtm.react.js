const  GuidanceFeedbackGTM = (formID) => {
    return {
        form: document.querySelectorAll(formID)[0],
        elemArr: [],
        dataLay: {},
        getElement() { 
            for(let el of this.form) {
                if(el.type === 'textarea') this.elemArr.push(el);
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
        aka(){
            this.getElement();
            this.buildObj();
            console.log(this.dataLay);
        }   
    }
}

export default GuidanceFeedbackGTM;