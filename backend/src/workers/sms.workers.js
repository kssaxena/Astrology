import { SMS_TEMPLATES } from "../constants/sms.constants.js";
import { sendSMS } from "../services/sms.service.js";

const sendOtpRegisterSMS = async (phone, otp) => {
  const message = `Welcome to Pitambra Astro! Your registration OTP is ${otp}. Valid for 10 minutes. Please do not share it with anyone. - Team Pitambra Astro`;

  return await sendSMS({
    phone,
    message,
    templateId: SMS_TEMPLATES.OTP_REGISTER,
  });
};

const sendOtpLoginSMS = async (phone, otp) => {
  const message = `Welcome to Pitambra Astro! Your login OTP is ${otp}. Valid for 10 minutes. Please do not share it with anyone. - Team Pitambra Astro`;

  return await sendSMS({
    phone,
    message,
    templateId: SMS_TEMPLATES.OTP_LOGIN,
  });
};

const sendRegisterConfirmationSMS = async (phone) => {
  const message = `Welcome to Pitambra Astro! You have been successfully registered. - Team Pitambra Astro`;

  return await sendSMS({
    phone,
    message,
    templateId: SMS_TEMPLATES.REGISTER_CONFIRMATION,
  });
};

export { sendOtpRegisterSMS, sendOtpLoginSMS, sendRegisterConfirmationSMS };
