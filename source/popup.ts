document.querySelector("#btn-add").addEventListener("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
		const novelNames = await chrome.runtime.sendMessage({
			action: "add",
			title: tabs[0].title,
			url: tabs[0].url,
		});
		console.log(novelNames);
		addNamesToList(novelNames);
	});
});

const addNamesToList = (novelNames: string[]) => {
	document.getElementById("add").style.display = "none";
	document.getElementById("findName").style.display = "block";

	const list = document.getElementById("select-name") as HTMLSelectElement;

	novelNames.forEach((name) => {
		let option = document.createElement("option");
		option.text = name;
		list.add(option);
	});
};
