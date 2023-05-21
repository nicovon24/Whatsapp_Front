import Chat from "@/components/Chat/Chat";
import Head from "next/head";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import {store} from "../redux/store"
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080"
import io from "socket.io-client"
const url = process.env.NEXT_URL_BACK
if(url){
	var socket = io(url)
	// console.log(socket)
}

export default function Home() {
	return (
		<div>
			<Provider store={store}>
				<Head>
					<title>Clonesapp Web</title>
					<meta name="description" content={"Hola"} />
					<link rel="icon" href=""/>
				</Head>
				<main className="bg-main-background min-h-screen">
					<Chat />
				</main>
			</Provider>
		</div>
	);
}
