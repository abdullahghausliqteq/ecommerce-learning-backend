const express = require("express")
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, userDetails, updatePassword, updateProfile } = require("../controllers/user.controller")
const { isAuthenticated } = require("../middlewares/auth")
const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/forgot-password').post(forgotPassword)
router.route('/reset-password/:token').put(resetPassword)
router.route('/user/:id').get(isAuthenticated, userDetails)
router.route('/update-password').put(isAuthenticated, updatePassword)
router.route('/update-user').put(isAuthenticated, updateProfile)
router.route("/logout").get(isAuthenticated, logoutUser)


module.exports = router