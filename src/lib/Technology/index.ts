import { ITechnology } from "@/data/Technology/ITechnlogy"

export async function loadTechnologys() {
  const res = await fetch('https://localhost:3000/api/technology')
  const data: ITechnology[] = await res.json()

  return data
}
