type UseSessionStorageParams = {
	key: string;
	initialValue?: string;
};

export const useSessionStorage = ({ key, initialValue }: UseSessionStorageParams) => {
	return {
		value: initialValue,
	};
};
