import { useCallback, useState } from "react";

type Status = "on" | "off";

const DEFAULT_STATUS = "off";

export const useToggle = (initialStatus: Status = DEFAULT_STATUS) => {
	const [status, setStatus] = useState<Status>(initialStatus);

	const toggle = useCallback(() => {
		setStatus((prevStatus) => {
			return prevStatus === "off" ? "on" : "off";
		});
	}, []);

	return { status, toggle };
};
