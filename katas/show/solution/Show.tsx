import type { PropsWithChildren } from "react";

type ShowProps = {
	when: boolean;
} & PropsWithChildren;

export const Show = ({ children, when }: ShowProps) => {
	if (when) {
		return <>{children}</>;
	}

	return null;
};
