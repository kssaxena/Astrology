import axios from "axios";

export const sendSMS = async ({
  mobile,
  message,
  templateId,
  campaignName = "Astrologer",
}) => {
  try {
    const payload = {
      username: process.env.SMS_USERNAME,
      password: process.env.SMS_API_KEY,
      senderid: process.env.SMS_SENDER_ID,
      campaignname: campaignName,
      entityid: process.env.SMS_ENTITY_ID,
      smslist: [
        {
          text: message,
          mobiles: mobile,
          messagetype: "PM",
          custref: `PARI-${Date.now()}`,
          templateid: templateId,
        },
      ],
    };

    const response = await axios.post(process.env.SMS_BASE_URL, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("SMS Error:", error.response?.data || error.message);
    throw error;
  }
};
