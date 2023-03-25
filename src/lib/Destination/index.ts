import { IDestination } from "@/data/Destination/IDestination"

const API_URL = process.env.API_URL;

export async function loadDestinations() {
  const res = await fetch(`${API_URL}api/destinations`)
  const data: IDestination[] = await res.json()

  return data
}
