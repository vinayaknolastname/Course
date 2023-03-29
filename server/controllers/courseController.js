import { catchAsyncError } from "../middleware/catchAsyncError.js";
import { Course } from "../models/Course.js";
import getDataUri from "../utils/dataUri.js";
import ErrorHandler from "../utils/errorHandler.js";
import cloudinary from "cloudinary";
import { User } from "../models/User.js";
import { Stats } from "../models/stats.js";
import { addToPlaylist } from "./userController.js";

export const getAllCourses = catchAsyncError(async (req, res, next) => {
  
  const keyword = req.query.keyword || "";
  const category = req.query.keyword || "";


  
  const courses = await Course.find({
    // title: {
    //   $regex: keyword,
    //   // options: "i"
    // },
    // category: {
    //   $regex: category,
    //   // options: "i"
    // }
  });



  res.status(200).json({
    success: true,
    courses,
  });
});

export const createCourse = catchAsyncError(async (req, res, next) => {
  const { title, description, category, createdBy } = req.body;

  if (!title || !description || !category || !createdBy)
    return next(new ErrorHandler("Please Add all Fields", 400));

  // const file = req.file;

  // const fileUri = getDataUri(file);

  // const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);

  // console.log(fileUri);

  await Course.create({
    title,
    description,
    category,
    createdBy,
    poster: {
      public_id: "mycloud.public_id",
      url: "mycloud.secure_url",
    },
  });

  res.status(201).json({
    success: true,
    message: "Course Created Successfully. You can add lectures now",
  });
});

export const getCourseLectures = catchAsyncError(async (req, res, next) => {
  const course = await Course.findById(req.params.id);

  if (!course) return next(new ErrorHandler("course not found", 400));

  course.views += 1;

  await course.save();

  res.status(200).json({
    success: true,
    lectures: course.lectures,
  });
});

export const addCourseLectures = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const { title, description } = req.body;

  //

  const course = await Course.findById(id);

  if (!course) return next(new ErrorHandler("course not found", 400));

  const file = req.file;

  const fileUri = getDataUri(file);

  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content, {
    resource_type: "video",
  });




  course.lectures.push({
    title,
    description,
    video: {
      public_id: mycloud.public_id,
      url: mycloud.secure_url,
    },
  });

  course.numOfVideos = course.lectures.length;

course.numOfVideos = course.lectures.length;

  await course.save();



  res.status(200).json({
    success: true,
    message: "lectures added in",
  });
});

export const deleteCourse = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;




  const course = await Course.findById(id);

  if (!course) return next(new ErrorHandler("course not found", 400));


  await cloudinary.v2.uploader.destroy(course.poster.public_id);

for ( let i = 0; i < course.lectures.length; i++) {
  const singleLecture = course.lectures[i]
  await cloudinary.v2.uploader.destroy(singleLecture.video.public_id, {
    resource_type: "video"
  });
}


await course.remove();



  res.status(200).json({
    success: true,
    message: "course dekted successfully",
  });
});




export const deleteLecture = catchAsyncError(async (req, res, next) => {
  const { courseId , lectureId } = req.query;




  const course = await Course.findById(courseId);

  if (!course) return next(new ErrorHandler("course not found", 400));


  const lecture = course.lectures.find( (item) => {
  if( item._id.toString() === lectureId.toString() ) return item
} )

await cloudinary.v2.uploader.destroy(lecture.video.public_id, {
  resource_type: "video"
})


course.lectures = course.lectures.find( (item) => {
  if( item._id.toString() === lectureId.toString() ) return item
} )




  await cloudinary.v2.uploader.destroy(course.poster.public_id);

for ( let i = 0; i < course.lectures.length; i++) {
  const singleLecture = course.lectures[i]
  await cloudinary.v2.uploader.destroy(singleLecture.video.public_id, {
    resource_type: "video"
  });
}


await course.remove();



  res.status(200).json({
    success: true,
    message: "course dekted successfully",
  });
});


export const getAllUsers = catchAsyncError(async (req, res, next) => {


  const users = await User.find({});





  res.status(200).json({
    success: true,
    message: "course dekted successfully",
    users, 
  });
});



export const updateUserRole = catchAsyncError(async (req, res, next) => {


  const user = await User.findById(req.params.id);

  if( !user ) return next(new ErrorHandler("user noy Found", 404))

  if (user.role === "user") user.role ="admin";

  else user.role = "user";

  await user.save();





  res.status(200).json({
    success: true,
    message: "role changed"
  });
});


Course.watch('change' , async () => {

  const stats = await Stats.find({}).sort({ createdAt: "desc"}).limit(1);


  const courses = await Course.find({});

  let totalViews = 0;

  for (let i = 0; i < courses.length ; i++) {
    
    totalViews += courses[i].views;
  }

  stats[0].views = totalViews;;

  stats[0].createdAt = new Date(Date.now());


await stats[0].save()



})
