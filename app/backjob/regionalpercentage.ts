
export default async function regionalpercentage ()  {
  try {
    const res = await fetch("http://localhost:2024/auth/percentage")
    if (!res.ok){
        throw new Error('No votes loaded')
    }
    return res.json()
  } catch (error) {
    throw new Error(`Failed: ${error}`)
  }
}

