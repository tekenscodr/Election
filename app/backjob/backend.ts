
export async function getPercentage() {
  try{
    const res = await fetch('https://colbak.vercel.app/auth/percentage')
    if (!res.ok){
     throw new Error('No votes loaded')
    }
    return res.json()
    } catch (error) {
      throw new Error(`Failed: ${error}`)
    }
}


export async function nationalPercentage(){
   try{
      const res = await fetch('https://colbak.vercel.app/auth/percentage')
      if (!res.ok){
       throw new Error('No votes loaded')
      }
      return res.json()
      } catch (error) {
        throw new Error(`Failed: ${error}`)
      }
  }
  
export async function getUsers(){
  try{
    const res = await fetch('https://colbak.vercel.app/auth/allusers')
    if (!res.ok){
    throw new Error('No votes loaded')
    }
    const data = res.json()
    console.log(data)
    return data
  } catch (error) {
    throw new Error(`Failed: ${error}`)
  }
}

export async function voteFigures(){
  try{
    const res = await fetch('https://colbak.vercel.app/auth/figures')
    if (!res.ok){
    throw new Error('No votes loaded')
    }
    const data = res.json()
    console.log(data)
    return data
  } catch (error) {
    throw new Error(`Failed: ${error}`)
  }
}


export async function allVotes(){
  try{
    const res = await fetch('https://colbak.vercel.app/auth/allvotes')
    if (!res.ok){
    throw new Error('No votes loaded')
    }
    const data = res.json()
    console.log(data)
    return data
  } catch (error) {
    throw new Error(`Failed: ${error}`)
  }
}

export async function constituencyvotes(){
  try{
    const res = await fetch('https://colbak.vercel.app/auth/constituency-votes')
    if (!res.ok){
    throw new Error('No votes loaded')
    }
    const data = res.json()
    console.log(data)
    return data
  } catch (error) {
    throw new Error(`Failed: ${error}`)
  }
}