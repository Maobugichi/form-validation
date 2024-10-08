const form = document.querySelector("form")
const button = document.querySelector("button")
let err = false
const success = document.querySelector(".success")


form.addEventListener("submit", (e) => {
  e.preventDefault()
  const formData = new FormData(form)
  const formFields = ["fName", "lName", "email", "type", "message", "checkbox"]
  
  formFields.forEach(item => {
    const input = document.querySelector(`[name ="${item}"]`)
    const span = document.querySelector(`#err-${item}`)
   
    //console.log(!formData.get(item))
    if (!formData.get(item)) {
      input.classList.add("err-border")
      span.classList.add("block")
    } else {
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
  
