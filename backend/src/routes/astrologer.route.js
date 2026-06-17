import Router from "express";
import {
  registerAstrologer,
  loginAstrologer,
  otpAuthentication,
  welcomeMessage,
  updateProfile,
  getAstrologerForFeed,
  deleteAstrologerById,
  deleteAstrologerByContactNumber,
} from "../controllers/astrologer.controller.js";

const router = Router();

router.route("/register");
