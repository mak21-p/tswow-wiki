import { Redirect } from "@docusaurus/router";
import config from "@site/docusaurus.config";

export default function Home(): JSX.Element {
  return <Redirect to={config.baseUrl + "docs/intro"} />;
}
