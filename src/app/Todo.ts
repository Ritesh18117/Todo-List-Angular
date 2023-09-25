// This file haves the model of Todo Class. 
// Hold the Structure of Todo Class
export class Todo{
    title: string;
    desc: string;
    active: boolean;
  
    constructor(title:string, desc:string,active:boolean) {
      this.title = title;
      this.desc = desc;
      this.active = active;
    }
}