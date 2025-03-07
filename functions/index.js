const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {calculateGST} = require("./gstCalculator");
const {fileGST} = require("./gstApiService");

admin.initializeApp();

exports.processBooking = functions.firestore
    .document("bookings/{bookingId}")
    .onUpdate(async (change, context) => {
      const newValue = change.after.data();
      if (newValue.status !== "finished") return;

      const {name, totalAmount} = newValue;
      const {igst, cgst, sgst} = calculateGST(totalAmount);

      const gstResponse = await fileGST({name, totalAmount, igst, cgst, sgst});
      await change.after.ref.update({gstFiled: true, gstResponse});
    });
