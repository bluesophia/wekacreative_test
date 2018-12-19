import axios from 'axios';


function handleSubmitpost(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById('message').value;
    axios({
      method: "POST",
      url:"/send",
      data: {
        name: name,
        email: email,
        phone: phone,
        message: message
      }
    }).then((response) => {
        if (response.data.msg == 'success'){
          console.log("Messagesent");
          alert("Message Sent.");
          // this.resetForm();
        }else if(response.data.msg === 'fail'){
          alert("Message failed to send.")
        }
      })
  }
  
  export default handleSubmitpost;
  // export function resetForm() {
  //   document.getElementById('support-form').reset();
  // }