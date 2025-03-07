const axios = require("axios");

exports.fileGST = async ({ name, totalAmount, igst, cgst, sgst }) => {
    try {
        const response = await axios.post("https://gst-api.example.com/file", {
            name, totalAmount, igst, cgst, sgst
        }, {
            headers: { Authorization: Bearer YOUR_API_KEY }
        });
        return response.data;
    } catch (error) {
        console.error("GST API Error:", error);
        return { success: false, error: error.message };
    }
};
