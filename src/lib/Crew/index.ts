import { ICrew } from "@/data/Crew/ICrew"

export async function loadCrew() {
  const res = await fetch('https://localhost:3000/api/crew')
  const data: ICrew = await res.json()

  return data
}
