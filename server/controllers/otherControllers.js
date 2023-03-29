import { catchAsyncError } from "../middleware/catchAsyncError.js";
import { User } from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendToken } from "../utils/sendToken.js";
import { sendEmail } from "../utils/snedEmail.js";
import crypto from "crypto";
import { Stats } from "../models/stats.js";



export const getDashboardStats = catchAsyncError(async (req, res, next) => {
  const stats = await Stats.find({}).sort({
      createdAt: "desc",
    }).limit(12);



  const statsData = [];

  for (let i = 0; i < stats.length; i++) {
    statsData.unshift(stats[i]);
  }


  
  const requiredSize = 12 - stats.length; //9

  for (let i = 0; i < requiredSize; i++) {
    statsData.unshift({
      users: 0,
      subscription: 0,
      views: 0,
    });
  }



  const usersCount = statsData[11].users;
  const viewsCount = statsData[11].views;


let usersProfit = true, viewsProfit = true
let usersPercentage = true, viewsPercentage = true


 if(statsData[10].users=== 0 ) usersPercentage = usersCount * 100;
 if(statsData[10].views === 0 ) viewsPercentage = viewsCount * 100;


 if(statsData[10].users=== 0 ) usersPercentage = usersCount * 100;

else{
  const difference = {
    users: statsData[11].users - statsData[10].users,
    views: statsData[11].views - statsData[10].views

  }

  usersPercentage = difference.users/statsData[10].users  * 100,
  viewsPercentage = difference.views/statsData[10].views  * 100

  if( usersPercentage < 0 ) usersProfit = false;
  if( viewsPercentage < 0 ) viewsProfit = false;

}

 

  res.status(200).json({
    success: true,
   stats:  statsData,
    usersCount,
    viewsCount,
    usersPercentage,
    viewsPercentage,
    usersProfit,
    viewsProfit
  });
});
