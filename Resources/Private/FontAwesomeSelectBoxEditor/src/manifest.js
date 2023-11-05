import manifest from "@neos-project/neos-ui-extensibility";
import FontAwesomeSelectBoxEditor from "./FontAwesomeSelectBoxEditor";

manifest("NeosRulez.Neos:FontAwesomeSelectBoxEditor", {}, (globalRegistry) => {
	const editorsRegistry = globalRegistry.get("inspector").get("editors");
	editorsRegistry.set("NeosRulez/Neos/Inspector/Editors/FontAwesomeSelectBoxEditor", {
		component: FontAwesomeSelectBoxEditor,
	});
});
