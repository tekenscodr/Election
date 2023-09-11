
export async function getPercentage() {
  try{
    const res = await fetch('http://localhost:2024/auth/percentage')
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
      const res = await fetch('http://localhost:2024/auth/percentage')
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
    const res = await fetch('http://localhost:2024/auth/allusers')
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

  
  
  
  
 