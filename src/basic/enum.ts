// number literal enum
enum Role {
	Reporter, // 0 && readonly
	Developer,
	Maintainer,
	Owner,
	Guest,
}

// string literal enum
enum Message {
	Success = "Success",
	Fail = "Fail",
}

const enum Month {
	January,
	February,
	March,
}
let month: Month = Month.January;

// refactor: the function initByRole

let initByRole = (role: Role) => {
	if (role == Role.Developer) {
		return "developer";
	} else if (role == Role.Maintainer) {
		return "maintainer";
	} else {
		return "guest";
	}
};

console.log(initByRole(Role.Developer));
