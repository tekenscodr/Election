
export default async function getData() {
    
        const res = await fetch('http://localhost:2024/auth/votes', {
            next:{
              revalidate: 10
          }})
        if (!res.ok){
         throw new Error('No votes loaded')
        }
        return res.json()
      
}


