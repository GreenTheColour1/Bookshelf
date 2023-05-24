let currentNovel: Novel;

document.querySelector('#btn-add')!.addEventListener('click', async () => {
	const tabs = await browser.tabs.query({active: true, currentWindow: true});

	const novel: Novel = await browser.runtime.sendMessage({
		action: 'add',
		title: tabs[0].title,
		url: tabs[0].url,
	}) as Novel;

	currentNovel = novel;

	addNamesToList(novel);
});

document.querySelector('#btn-save')!.addEventListener('click', async () => {
	const name = document.querySelector<HTMLSelectElement>('#select-name')!.selectedOptions[0].text;
	const chapter = Number(document.querySelector<HTMLInputElement>('#chapter')!.value);
	const url = document.querySelector<HTMLInputElement>('#url')!.value;

	currentNovel.name = name;
	currentNovel.chapter = chapter;
	currentNovel.url = url;

	const extStorage = (await browser.storage.sync.get()) as ExtentionStorage;

	if (extStorage.novelList) {
		extStorage.novelList.push(currentNovel as Novel);
	} else {
		extStorage.novelList = new Array<Novel>();
		extStorage.novelList.push(currentNovel as Novel);
	}

	await browser.storage.sync.set(extStorage);

	console.log('Novel saved!');
	console.log(extStorage);
});

const addNamesToList = (novel: Novel) => {
	document.querySelector<HTMLDivElement>('#add')!.style.display = 'none';
	document.querySelector<HTMLDivElement>('#findName')!.style.display = 'block';

	const list = document.querySelector<HTMLSelectElement>('#select-name')!;

	for (const name of novel.names) {
		const option = document.createElement('option');
		option.text = name;
		list.add(option);
	}

	document.querySelector<HTMLInputElement>('#chapter')!.value = novel.chapter.toString();

	document.querySelector<HTMLInputElement>('#url')!.value = novel.url;
};
