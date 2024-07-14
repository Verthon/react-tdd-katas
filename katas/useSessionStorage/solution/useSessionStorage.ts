import { useSyncExternalStore } from "react";

type UseSessionStorageParams<Value> = {
	key: string;
	initialValue?: Value;
};

const createStorage = (storage = window.sessionStorage) => {
	const setItem = <Value>(key: string, value: Value) => {
		storage.setItem(key, JSON.stringify(value));
		window.dispatchEvent(new Event("manualStorageUpdate"));
	};

	const getItem = <Value>(key: string) => {
		const storageValue = storage.getItem(key);

		return storageValue ? (JSON.parse(storageValue) as Value) : null;
	};

	const removeItem = (key: string) => {
		storage.removeItem(key);
		window.dispatchEvent(new Event("manualStorageUpdate"));
	};

	return {
		setItem,
		getItem,
		removeItem,
	};
};

const storage = createStorage();

export const useSessionStorage = <Value>({
	key,
	initialValue,
}: UseSessionStorageParams<Value>) => {
	const subscribe = (callback: VoidFunction) => {
		const handleStorageChange = (event: StorageEvent) => {
			if (event.key === key) callback();
		};
		window.addEventListener("storage", handleStorageChange);
		window.addEventListener("manualStorageUpdate", callback);

		return () => {
			window.removeEventListener("storage", handleStorageChange);
			window.removeEventListener("manualStorageUpdate", callback);
		};
	};

	const getSnapshot = () => {
		return storage.getItem<Value>(key);
	};

	const value = useSyncExternalStore(subscribe, getSnapshot);

	const setValue = (newValue: Value) => {
		storage.setItem<Value>(key, newValue);
	};

	const clearValue = () => {
		storage.removeItem(key);
	};

	return {
		value: value ?? initialValue,
		setValue,
		clearValue,
	};
};
