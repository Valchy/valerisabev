import { useEffect, useState } from 'react';

// How to use generics
// interface Arguments {
// 	initialValue: any;
// 	useLocalStorage: string;
// }

// Save state to local storage on change
export default function useLocalStorage(initialValue: any, localStorageName: string) {
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		window.localStorage[localStorageName] = value;
	}, [localStorageName, value]);

	return [value, setValue];
}
