import express from "express";
import { login, register, logout, getMyProfile, changepassword, updateProfile, updateProfilePicture, forgotPassword, resetPassword, addToPlaylist, removeFromPlaylist, deleteMyProfile } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/auth.js";



const router = express.Router();


router.route("/register").post(register);

router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/me").get(isAuthenticated , getMyProfile); 

router.route("/me").delete(isAuthenticated , deleteMyProfile); 

router.route("/changepassword").put(isAuthenticated , changepassword); 

router.route("/updateprofile").put(isAuthenticated , updateProfile); 


router.route("/updateprofilepicture").put(isAuthenticated , updateProfilePicture); 


router.route("/forgetpassword").post(forgotPassword);


router.route("/resetpassword/:token").put(resetPassword);


router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);

router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);



// router.route("/resettpassword/:token").put(resetPassword);

















export default router;