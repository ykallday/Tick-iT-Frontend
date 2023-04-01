import Client from './api'

export const GetArtists = async() =>{
    try{
        const res = await Client.get("/artists");
        return res.data;
    }catch (error){
        throw error;
    }
}