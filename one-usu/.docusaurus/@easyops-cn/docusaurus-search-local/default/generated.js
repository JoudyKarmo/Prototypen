import lunr from "C:\\Users\\usijkarmo\\WebstormProjects\\prototypen\\one-usu\\node_modules\\lunr\\lunr.js";
require("C:\\Users\\usijkarmo\\WebstormProjects\\prototypen\\one-usu\\node_modules\\lunr-languages\\lunr.stemmer.support.js")(lunr);
require("@easyops-cn/docusaurus-search-local/dist/client/shared/lunrLanguageZh").lunrLanguageZh(lunr);
require("C:\\Users\\usijkarmo\\WebstormProjects\\prototypen\\one-usu\\node_modules\\lunr-languages\\lunr.multi.js")(lunr);
export const language = ["en","zh"];
export const removeDefaultStopWordFilter = false;
export const removeDefaultStemmer = false;
export { default as Mark } from "C:\\Users\\usijkarmo\\WebstormProjects\\prototypen\\one-usu\\node_modules\\mark.js\\dist\\mark.js"
export const indexHash = "d3193866";
export const searchResultLimits = 8;
export const searchResultContextMaxLength = 50;
export const explicitSearchResultPath = true;