export class Todo{
    public id?:number;
    public text?:string;
    constructor(text:string){
        this.id=Math.random();
        this.text=text;
    } 
}