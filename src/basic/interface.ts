interface List {
	id: number;
	name: string;
}

interface Result {
	data: List[];
}

let render = (result: Result) => {
	result.data.forEach((item) => {
		console.log(item.id, item.name);
	});
};

let mockData: Result = {
	data: [
		{ id: 1, name: "foo", sex: "male" },
		{ id: 2, name: "bar" },
	],
} as Result;
render(mockData);
