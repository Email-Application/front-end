let input=document.querySelector('input');

input.addEventListener("input",(e)=>{
  if (input.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});
});
