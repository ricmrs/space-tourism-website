import { loadCrew } from '@/lib/Crew';

export { default } from '@/screens/CrewPage';

export async function getServerSideProps() {
  const crew = await loadCrew();
  return {
    props: {
      crew
    }
  }
}
