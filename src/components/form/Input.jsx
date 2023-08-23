import { useState } from "react";

// eslint-disable-next-line
export default _ => {

	const [value, setValue] = useState("Valor Inicial")

	return <div>

		<input value={value} onChange={e=>setValue(e.target.value)}/>
		<input value={value} readOnly/>

	</div>;

}