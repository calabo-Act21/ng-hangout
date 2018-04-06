export class TopicModel {
    id: string;
    title: string;
    picture: string;
    lastMessage: string;
    lastMessageDate: Date;
    lastMessageAuthor: string;

    constructor(data: any) {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                this[key] = data[key];
            }
        }
    }
}
