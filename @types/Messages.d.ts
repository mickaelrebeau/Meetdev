type Messages = {
    id: number,
    name: string,
    imgUrl: ImageSourcePropType,
    chat: Message[],
}

type Message = {
    sender: string,
    content: string,
    date: Date
}