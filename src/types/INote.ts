export interface Note{
    _id:string;
    title:string;
    items:IItem[];
    author:string;
}

export interface IItem{
    itemTitle:string;
    checked:boolean;
    _id:string;
}