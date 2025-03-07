const axios = require("axios");
const GST_API_URL = "https://gst-insights-api.p.rapidapi.com/getGSTDetailsUsingGST/27AABCI6363G3ZH";
const RAPIDAPI_KEY = "0f125b0e01mshf04ff8305fa6376p1eadaejsn0a6528c789ea";
const RAPIDAPI_HOST = "gst-insights-api.p.rapidapi.com";

exports.fileGST = async ({name, totalAmount, igst, cgst, sgst}) => {
  try {
    const response = await axios.post(
        GST_API_URL,
        {name, totalAmount, igst, cgst, sgst},
        {
          headers: {
            "x-rapidapi-key": RAPIDAPI_KEY,
            "x-rapidapi-host": RAPIDAPI_HOST,
          },
        },
    );
    return response.data;
  } catch (error) {
    console.error("GST API Error:", error);
    return {success: false, error: error.message};
  }
};
