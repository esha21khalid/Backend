import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoschema = new mongoose.Schema(
    {
        videofile:{
            type:String, //cloudinery url
            required:true
        },
         thumbnail:{
            type:String, //cloudinery url
            required:true
        },
         title:{
            type:String, //cloudinery url
            required:true
        },
         description:{
            type:String, //cloudinery url
            required:true
        },
         views:{
            type:Number,
            default:0
         },
         duration:{
            type:Number,
            required:true
         },
         isPublished:{
            type:Boolean,
            default:true
         },
         owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
         }

    },{timestamps:true}
)

videoschema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoschema);

