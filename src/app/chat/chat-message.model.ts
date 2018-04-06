export class ChatMessageModel {
    public author: string;
    public date: Date;
    public content: string;

    constructor(data: any) {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                this[key] = data[key];
            }
        }
    }
}
