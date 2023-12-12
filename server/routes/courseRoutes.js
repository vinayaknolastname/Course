import express from "express";
import {
  addCourseLectures,
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllCourses,
  getAllUsers,
  getCourseLectures,
  updateUserRole,
} from "../controllers/courseController.js";
import { authorizeAdmin, isAuthenticated } from "../middleware/auth.js";
import singleUpload from "../middleware/multer.js";


const router = express.Router();

router.route("/").get( ( req, res , next ) => (


 res.send( `<h1   >Frontend Link <a  href=${process.env.FRONTEND_URL} >   Click Here!! </a>    </h1>`)


  )
)


router.route("/courses").get(getAllCourses);

router
  .route("/createcourse")
  .post(isAuthenticated, authorizeAdmin, singleUpload, createCourse);

router
  .route("/course/:id")
  .get(isAuthenticated, getCourseLectures)
  .post(isAuthenticated, authorizeAdmin, singleUpload, addCourseLectures)
  .delete(isAuthenticated, authorizeAdmin, deleteCourse)




router.route("/lectures").delete(isAuthenticated, authorizeAdmin, deleteLecture);








/////admin routes


router.route("/admin/users").get(isAuthenticated , authorizeAdmin, getAllUsers )


router.route("/admin/user/:id").put(isAuthenticated , authorizeAdmin, updateUserRole )



export default router;
