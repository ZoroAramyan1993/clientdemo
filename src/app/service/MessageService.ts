export class MessageService {

messages: string[] = [];
  addMessage(message: string) {

    this.messages.push(message);
  }
}
