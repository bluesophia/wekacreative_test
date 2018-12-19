import react from 'react';

function handleSubmit(e) {
    // event.preventDefault();
    // const data = new FormData(event.target);
    
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
   console.log("handlesubmit");
  }


  _handleSubmit(event) {
    alert(this.state.name);
  axios.post('/create',{values:this.state.name,ages:this.state.age})
  .then(function(response){
    console.log(response);
  })

  //Export
  export default handleSubmit;