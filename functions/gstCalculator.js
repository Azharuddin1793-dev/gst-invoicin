exports.calculateGST = (amount) => {
  const gstRate = 18;
  const gstAmount = (amount * gstRate) / 100;
  const cgst = gstAmount / 2;
  const sgst = gstAmount / 2;
  return {igst: gstAmount, cgst, sgst};
};
