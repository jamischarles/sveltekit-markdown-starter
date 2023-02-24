/**
 * Naming this .server ensures this is server-side only logic
 * 
 */
import type { PageLoad } from './$types';
import {marked} from "marked"; // markdown -> html
import * as prettier from "prettier";
import { renderString } from "codemirror-server-render"; // codesnippet syntax highlight

export const load: PageLoad = async ({ fetch, params }) => {
  const slug = params['slug']; // retrieve the "slug" param

const res = await fetch(`/posts/${slug}.md`);
const post = await res.text();

/* // For manual testing
const codeSnippet = "function myTestFunction(param1, param2){alert();}"
const tokenized = renderString(codeSnippet)
*/

// FIXME: Weird hack to generate the CSS. This can be memoized because the styles don't really change.
// can we bundle this below with the renderString() call there somehow?
const tokenized = renderString("");
const codesnippetStyles = /*tokenized.css.baseEditorStyles + "\n\n" + */tokenized.css.highlightRules.join("\n");
// console.log("code", renderString(codeSnippet))


// TODO: run prettier through it bedore. then commit and move on to my fork. 
// https://prettier.io/docs/en/api.html


// set highlighter for markdown
marked.setOptions({
highlight: function(code, lang, callback) {
    try {
      code = prettier.format(code, {parser: "babel"});  
    }catch (e) {
      console.log('Prettier encountered syntax err:', e, code);
    }
    
     return renderString(code).code
 },
})

  return {
    slug,
    post: marked.parse(post),// + tokenized.code, // parse as html
    snippetStyle: codesnippetStyles
  };
};