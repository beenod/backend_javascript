import mongoose,{Schema}from "mongoose";
import mongooseAggregatePaginate from 'monsoose-aggregate-paginatev2';



const videoSchema = new Schema({
videoFile:{
    type:String,
    required:true
},
title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
duration:{
    type:String,
    required:true
},
views:{
    type:Number,
    default:0
},
isPublished:{
    type:String,
    required:true
},
owner:{
    type:Schema.Types.ObjectId,
    ref:'User'
},


},{
    timestamps:true
})


videoSchema.plugin(mongooseAggregatePaginate)

export const video = mongoose.model('video', videoSchema);