const  GuidanceFeedbackGTM = (formID) => {
    let arr = [];
    // Return an object with the logic inside
    return {
        // Push the
        getElements() { document.querySelectorAll(formID).forEach(element => { 
            for(let elem of element.elements) {
                arr.push(elem);
            }
        })},
        aka() {
            this.getElements();
            //console.log(arr[3].value);
        }
    }
}

export default GuidanceFeedbackGTM;