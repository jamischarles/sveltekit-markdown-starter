import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter()
	},
	extensions: [".svelte"],

};

export default config;


// function markdownPreprocess() {
// 	return {
// 		markup: function(source) {
// 			const input = source.content;
// 			let output = "";
// 			console.log("source.filename", source.filename);
// 			const ext = source.filename.split(".")?.at(-1); // FIXME: check for files with more than one dot

// 			if (ext === "md") {
// 				console.log('INSIDE');
// 			}else {
// 				console.log('###OUTSIDE');
// 				output = input;
// 			}
			
// 			return {
// 				code: output
// 			}
// 		}
// 	}
// }


