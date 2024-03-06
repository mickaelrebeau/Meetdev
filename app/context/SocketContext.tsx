import { createContext, useEffect, useRef } from "react";
import socketIOClient, { Socket } from "socket.io-client";

const SOCKET_URL = "http://192.168.1.36:3030";

interface SocketContextProps {
	socket: Socket | null;
}

export const SocketContext = createContext<SocketContextProps>({
	socket: null,
});

const connectionConfig = {
	jsonp: false,
	reconnection: true,
	reconnectionDelay: 100,
	reconnectionAttempts: 100000,
	transports: ["websocket"],
};

export const SocketProvider: React.FC<React.PropsWithChildren<{}>> = ({
	children,
}: React.PropsWithChildren<{}>) => {
	const env = SOCKET_URL;
	const socket = useRef<Socket | null>(socketIOClient(env, connectionConfig));

	useEffect(() => {
		socket.current?.on("connect", () => {});

		socket.current?.on("disconnect", (msg: any) => {
			console.log("SocketIO: Disconnect", msg);
			socket.current = socketIOClient(env, connectionConfig);
		});

		return () => {
			if (socket.current) {
				socket.current.removeAllListeners();
				socket.current.close();
			}
		};
	}, [env]);

	return (
		<SocketContext.Provider value={{ socket: socket.current as Socket }}>
			{children}
		</SocketContext.Provider>
	);
};