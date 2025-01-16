import { Router } from "express";
import { checkAuth, newRefreshAndAccessToken, userLogin, userLogout, userSignup } from "../controllers/user.controllers.js";
import { verifyJwt } from "../middlewares/auth.middlewares.js";

const router = Router()

router.route('/signup').post(userSignup)
router.route('/login').post(userLogin)
router.route('/logout').patch(verifyJwt,userLogout)
router.route('/refresh-token').get(verifyJwt,newRefreshAndAccessToken)
router.route('/check-auth').get(verifyJwt,checkAuth)

export default router