import Head from 'next/head';
import { useEffect, useRef, useState } from 'react'
const Socket = () => {

	const [text, setText] = useState<string>()
	const ws = useRef<WebSocket>()

	useEffect(() => {
		if(ws.current) {
			ws.current.onopen = () => { console.log('WS open') }
			ws.current.onclose = () => { console.log('WS close') }
			ws.current.onmessage = (message) => {
				console.log(message)
			}
		}
		return () => { ws.current?.close() }
	}, [])

	const onConnect = () => {
		const connection = new WebSocket('wss://test.taxivoshod.ru:9998');

		console.log("Socket Object", connection)

		ws.current = connection;
	}

	const onSend = () => {
		ws.current?.send(text as string)

		console.log("test")
	}

	return (
		<>
			<Head>
				<title>socket test</title>
			</Head>

			<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
				<textarea style={{ background: "blue"}} placeholder="hello" name="" id=""  onChange={e => setText(e.target.value)}></textarea>
				<div>
					<button style={{ display: "inline-block", marginRight: "10px", padding: "10px", background: "black" }} onClick={onConnect}>connect</button>
					<button style={{ display: "inline-block", padding: "10px", background: "black" }} onClick={onSend}>send</button>
				</div>
			</div>
		</>
	)
}

export default Socket