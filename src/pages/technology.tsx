import { loadTechnologys } from '@/lib/Technology';

export { default } from '@/screens/TechnologyPage';

export async function getServerSideProps() {
  const technologys = await loadTechnologys();
  return {
    props: {
      technologys
    }
  }
}
