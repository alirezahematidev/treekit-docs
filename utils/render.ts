interface RenderProps<T> {
  children: React.ReactNode;
  when: T | boolean;
  fallback?: React.ReactNode;
}

export const Render = <T>({ children, when, fallback = null }: RenderProps<T>) => {
  return when ? children : fallback;
};
