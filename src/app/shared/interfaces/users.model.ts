export interface userModel {
    id: string;
    firstName: string;
    lastName: string;
    password: string;
}

class UserClass {
    id = '';
    firstName = '';
    lastName = '';
    password= '';
    constructor(id: string, firstName: string, lastName: string, password: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }
}