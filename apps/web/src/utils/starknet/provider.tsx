import { goerli } from "@starknet-react/chains";
import { StarknetConfig, publicProvider } from "@starknet-react/core";
import { WebWalletConnector } from "starknetkit/webwallet";
import type { Connector } from "@starknet-react/core";

export default function StarknetProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const chains = [goerli];
	const provider = publicProvider();
	const connectors = [
		// argent(),
		new WebWalletConnector({ url: "https://web.argent.xyz" }),
	];

	return (
		<StarknetConfig chains={chains} provider={provider} connectors={connectors as unknown as Connector[]}>
			{children}
		</StarknetConfig>
	);
}
