const title = "About this app";
const text = `<p>This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the following into your command line and following the prompts:</p><pre>npm init svelte@next</pre> <p> The page you're looking at is purely static HTML, with no client-side interactivity needed. Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening the devtools network panel and reloading. </p>`;
const about = {
  title,
  text
};
export {
  about as default,
  text,
  title
};
