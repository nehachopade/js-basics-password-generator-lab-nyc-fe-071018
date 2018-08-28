window.addEventListener("load", () => {
    document.addEventListener('submit',(event)=>{
      const input=document.getElementById('passwordLength')
      let passwordLength= input.value
      event.preventDefault()
      console.log(passwordLength)
    })
    
});
