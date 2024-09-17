
export interface IProduct {
    Id: number;
    Name: string;
}


export class Product implements IProduct {
    public Id: number;
    public Name: string;

    constructor(id: number, name: string) {
        this.Id = id;
        this.Name = name;
    }
}