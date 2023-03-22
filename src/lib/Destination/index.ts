import { IDestination } from "@/data/Destination/IDestination"

export async function loadDestinations() {
  const res = await fetch('http://localhost:3000/api/destinations')
  const data: IDestination[] = await res.json()

  return data
}
