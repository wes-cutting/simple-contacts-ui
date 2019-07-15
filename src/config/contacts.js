const contacts = []

export const getContacts = () =>{
    return contacts
}

export const addContact = contact => {
    let result = true
    if(contact.firstName &&
        contact.lastName &&
        contact.email &&
        contact.phone &&
        contact.age &&
        contact.password){
            contact.id = contacts.length
            contacts.push(contact)
            result = true
        }
    return result
}

export const login = (credentials) => {
    let result = false
    contacts.forEach(contact => {
        if(contact.email === credentials.email &&
            contact.password === credentials.password){
                result = true
            }
    })
    return result
}
