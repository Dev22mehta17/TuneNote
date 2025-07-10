import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model";
 export const createSong =async (req,res,next)=>{
    try{
        if(!req.files || !req.files.audioFile || !req.files.imageFile){
            return res.status(400).json({message:"Please Upload all files"});
        }
        const (title,artist,albumId,duration)=req.body
        const audioFile=req.files.audioFile
        const imageFile=re.files.imageFile

        const song =new Song({
            title,
            artist,
            audioUrl,
            imageUrl,
            duration,
            albumId: albumId ||null
        })
        await song.save()
        if(albumId){
            await Album.findByIdAndUpdate(albumId,{
                $push:{songs:song._id},
            })
        }
        res.status(201).json(song)
    }
    catch(error){
        console.log("Error in CreateSong ",error);
        next(error);

    }
};