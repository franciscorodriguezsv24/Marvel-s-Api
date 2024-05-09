import { get } from "./ApiHook";
import { url } from "../urls";

export const getCharacters = async () => {
  try{
    const response = await get(
    url.charactersData
    );
    return response;
  }catch(error){
    return error;
  }
};

export const getSeries = async () => {
  try{
    const response = await get(
      url.seriesData
    );
    return response;
  }catch(error){
    return error;
  }
}

export const getComics = async () => {
  try{
    const response = await get(
      url.comicsData
    );
    return response;
  }catch(error){
    return error;
  }
}