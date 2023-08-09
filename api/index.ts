export const getHits = (setHits: React.Dispatch<React.SetStateAction<null>>, term: string = "") => {
	const options: RequestInit = { method: "GET" };

	fetch(`https://hn.algolia.com/api/v1/search?query=${term}`, options)
			.then(response => response.json())
			.then((data: { hits: any }) => setHits(data.hits));
};
