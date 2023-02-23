<script lang="ts">

  export let data: {
    slug: string;
    post: string;
    snippetStyle: string;
  };
</script>

{@html `<style>${data.snippetStyle}</style>`}

<h1>{data.slug}</h1>

<p>{@html data.post}</p>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>