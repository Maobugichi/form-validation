const form = document.querySelector("form")
const button = document.querySelector("button")
let err = false
let errMess = []
const success = document.querySelector(".success")


form.addEventListener("submit", (e) => {
  e.preventDefault()
  const formData = new FormData(form)
  const formFields = ["fName", "lName", "email", "type", "message", "checkbox"]
  for (const [key,value] of formData.entries()) {
    if (value) {
      errMess.push(`${key}:${value}`)
    }
    
  } 

  console.log(errMess)
  
  formFields.forEach(item => {
    const input = document.querySelector(`[name ="${item}"]`)
    const span = document.querySelector(`#err-${item}`)
    
    
    if (!formData.get(item)) {
      input.classList.add("err-border")
      span.classList.add("block")
      err = true
      //console.log()
    } else if (formData.get(item) && errMess.length === 6) {
      success.classList.add("animate")
      setTimeout(async () => {
        //success.classList.add("deanimate")
        success.classList.remove("animate")
      },6000)
      input.classList.remove("err-border")
      span.classList.remove("block")
    }
  })
    //const keys = Array.from(formData.keys)
   //console.log(err) 
   errMess = []
    form.reset()
})

let prev = null

const inputType = document.querySelectorAll('input[type="radio"]')
  inputType.forEach(item => {
    const parentNode = item.parentNode
    
    item.addEventListener("change", () => {
      if (prev) {
        prev.classList.remove("inputChange")
      }
      console.log(prev)
      parentNode.classList.add("inputChange")
      prev = parentNode
    })
   
  })
  console.log(inputType)
  
