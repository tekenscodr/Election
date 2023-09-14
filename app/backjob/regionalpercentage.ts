
export default async function regionalpercentage ()  {
  try {
    const res = await fetch("https://colbak.vercel.app/auth/percentage")
    if (!res.ok){
        throw new Error('No votes loaded')
    }
    return res.json()
  } catch (error) {
    throw new Error(`Failed: ${error}`)
  }
}