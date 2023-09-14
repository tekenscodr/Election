
export default async function getData() {
    
        const res = await fetch('https://colbak.vercel.app/auth/votes', {
            next:{
              revalidate: 10
          }})
        if (!res.ok){
         throw new Error('No votes loaded')
        }
        return res.json()
      
}


