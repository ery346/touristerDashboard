export interface cityModel {
    id: string;
    country: string;
    state: string;
    name: string;
}

class CityClass {
    id = '';
    country = '';
    state = '';
    name = '';
    constructor(id: string, country: string, state: string, name: string){
        this.id = id;
        this.country = country;
        this.state = state;
        this.name = name;
    }
}