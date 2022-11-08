import { baseAxiosInstance } from "./InsAxios";

export const appId = '6f908a885dd2116fdfde4d18288c20b8' ;

export const timer = (ms: number | undefined) => new Promise(res => setTimeout(res, ms))

export const callGetWithQueryString =  async (queryString: string) => {
     
   try{

        const res = await baseAxiosInstance.get(queryString+'&APPID='+appId)
        if(res.data){ return res }

   }catch(err){
         return err
   }
       
       

             
}
