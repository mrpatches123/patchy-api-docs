import NavigationBar from "../navigationbar";
import Link from "next/link";

export default function Players() {
	return (
		<div className="flex flex-auto flex-row">
			<NavigationBar />
			<div className=" flex flex-auto flex-col justify-start m-10">
				<h5 className="params">this page is empty</h5>
			</div>
		</div>
	);
}