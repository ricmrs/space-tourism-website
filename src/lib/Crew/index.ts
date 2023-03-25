import { ICrew } from "@/data/Crew/ICrew"

const API_URL = process.env.API_URL;

export async function loadCrew() {
  const res = await fetch(`${API_URL}api/crew`)
  const data: ICrew = await res.json()

  return data
}
