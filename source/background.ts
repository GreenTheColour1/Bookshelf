chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	console.log("hello");
	if (message.action === "add") {
		//find chapter number and novel name
		const novelnames = NovelParser(message.title, message.url);

		sendResponse(novelnames);
	}
});

const NovelParser = (title: string, url: string) => {
	const chapterString = new RegExp("chapter.d+", "i");

	let novelNames = title.split(chapterString);

	console.log(novelNames);

	return novelNames;
};
