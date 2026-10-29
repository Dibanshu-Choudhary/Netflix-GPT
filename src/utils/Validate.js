 export const Validate=(email,password)=>{
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password)


  if(!isEmailValid && !isPasswordValid){
    return "Check your Email and Password"
  }

  if(!isEmailValid){
    return "Check your Email"
  }

  if(!isPasswordValid){
    return "Check your password"
  }


    return null;
}