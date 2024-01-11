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

type GroupedMessage = {
	title: string,
	data: Message[],
}