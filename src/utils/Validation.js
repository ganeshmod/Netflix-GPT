export  const ValidateData=(email,password)=>{
const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
if(!emailRegex){
    return "Invalid Email"
}
if(!passwordRegex){
    return "Password must be at least 8 characters long and contain at least one letter and one number"
}
return "null"
}