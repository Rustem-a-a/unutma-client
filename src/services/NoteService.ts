import {AxiosResponse} from "axios";
import {INoteResponse} from "../types/response/IResponse";
import $api from "../http";
import {IItem} from "../types/INote";

class NoteService{

    static async getNotes():Promise<AxiosResponse<INoteResponse>>{
        return $api.get<INoteResponse>('/get/note')
    }

    static async createNote(title:string):Promise<AxiosResponse<INoteResponse>>{
        return $api.post<INoteResponse>('/create/note', {title})
    }

    static async changeItems({noteId,newItems}:{noteId:string,newItems:IItem[]}):Promise<AxiosResponse<INoteResponse>>{
        return $api.patch<INoteResponse>('/update/item', {noteId,newItems})
    }

    static async deleteNote(id:string):Promise<AxiosResponse<INoteResponse>>{
        return $api.delete<INoteResponse>(`/delete/${id}`)
    }

}
export default NoteService