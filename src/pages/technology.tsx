import { loadTechnologys } from '@/lib/Technology';

export { default } from '@/screens/TechnologyPage';

export async function getStaticProps() {
  const technologys = await loadTechnologys();
  return {
    props: {
      technologys
    }
  }
}
