import { loadDestinations } from '@/lib/Destination';

export { default } from '@/screens/DestinationPage';

export async function getServerSideProps() {
  const destinations = await loadDestinations();
  return {
    props: {
      destinations
    }
  }
}
