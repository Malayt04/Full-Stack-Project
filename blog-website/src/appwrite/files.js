import conf from "../conf/conf";
import {Client, Storage,ID} from "appwrite"

export class Files{
client= new Client();
bucket;

constructor(){
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    this.bucket=new Storage(this.client);
}

async createFile(file){
    try {
        return this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
    )
    } catch (error) {
        console.log(error);
    }
    
}

async deleteFile(fileId){
try {
    return await this.bucket.deleteFile(
       conf.appwriteBucketId,
        fileId); 
} catch (error) {
    console.log(error);
}



}

getFilePreview(fileId){
   return this.bucket.getFilePreview(conf.appwriteBucketId, fileId)
}
}

export const storage = new Files();