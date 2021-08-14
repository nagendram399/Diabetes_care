module.exports = registrationDate => {
    let today = new Date(), 
    age = today.getFullYear() - registrationDate.getFullYear(),
    m = today.getMonth() - registrationDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < registrationDate.getDate())) {
        age--;
    }
    return age;
}