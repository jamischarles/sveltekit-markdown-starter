/**
 * Naming this .server ensures this is server-side only logic
 * 
 */
import type { PageLoad } from './$types';
import {marked} from "marked";
import { renderString } from "codemirror-server-render";

export const load: PageLoad = async ({ fetch, params }) => {
  const slug = params['slug']; // retrieve the "slug" param

const res = await fetch(`/posts/${slug}.md`);
const post = await res.text();

const codeSnippet = "function myTestFunction(param1, param2){alert();}"
const tokenized = renderString(codeSnippet)
const codesnippetStyles = /*tokenized.css.baseEditorStyles + "\n\n" + */tokenized.css.highlightRules.join("\n");
// console.log("code", renderString(codeSnippet))

  return {
    slug,
    post: marked.parse(post) + tokenized.code, // parse as html
    snippetStyle: codesnippetStyles
  };
};