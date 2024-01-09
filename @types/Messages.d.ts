type Messages = {
    id: number,
    name: string,
    imgUrl: ImageSourcePropType,
    messages_received: Message[],
    messages_send?: Message[]
}

type Message = {
    content: string,
    date: Date
}