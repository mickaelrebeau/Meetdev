type Messages = {
    id: number,
    name: string,
    messages_received: Message[],
    messages_send?: Message[]
}

type Message = {
    content: string,
    date: Date
}