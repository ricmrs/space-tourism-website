import { ITechnology } from "@/data/Technology/ITechnlogy"

const API_URL = process.env.API_URL;

export async function loadTechnologys() {
  const res = await fetch(`${API_URL}api/technology`)
  const data: ITechnology[] = await res.json()

  return data
}
