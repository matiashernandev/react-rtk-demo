import { useSelector } from "react-redux";

export default function Test() {
	const test = useSelector((store) => store.tasks);
	console.log("🚀 ~ file: Test.jsx:8 ~ Test ~ test", test);

	return <div>Test</div>;
}
