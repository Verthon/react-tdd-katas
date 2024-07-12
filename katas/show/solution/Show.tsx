import type { PropsWithChildren } from "react";

type ShowProps = {
	when: boolean;
	fallback?: JSX.Element;
} & PropsWithChildren;

export const Show = ({ children, when, fallback }: ShowProps) => {
	if (when) {
		return <>{children}</>;
	}

	return fallback || null;
};
