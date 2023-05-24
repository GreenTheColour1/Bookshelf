browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.action === 'add') {
		// Find chapter number and novel name
		const novel: Novel = novelParser(
			message.title as string,
			message.url as string,
		);
		sendResponse(novel);
	}
});

const novelParser = (title: string, url: string): Novel => {
	const novelNames = title.split(/chapter.\d+/i);
	const chapterNumber = Number(/\b(?<=chapter.)\d+/i.exec(title)![0]);

	const novel = new Novel(novelNames, '', chapterNumber, url, url);

	return novel;
};

class Novel {
	name: string;
	chapter: number;
	url: string;
	names: string[];
	lastChapterUrl: string;

	constructor(
		names: string[],
		name: string,
		chapter: number,
		url: string,
		lastChapterUrl: string,
	) {
		this.names = names ?? [];
		this.name = name ?? '';
		this.chapter = chapter ?? 0;
		this.url = url ?? '';
		this.lastChapterUrl = lastChapterUrl ?? '';
	}
}

class ExtentionStorage {
	novelList: Novel[];
}
