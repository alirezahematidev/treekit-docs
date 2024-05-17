// to avoid blink layout
const delay = () => new Promise((resolve) => setTimeout(resolve, 500));

export async function lazyImport(scope: string, slug: string) {
  const { default: Component } = await import(`@/articles/${scope}/${slug}.mdx`);

  await delay();

  return Component;
}
