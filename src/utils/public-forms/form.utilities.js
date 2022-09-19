export const handleStatus = (status) => {
	switch (status) {
		case "Pending":
			return "warning";
		case "New":
			return "primary";
		case "In Progress":
			return "success";
		case "Completed":
			return "success";
		default:
			return "";
	}
};
