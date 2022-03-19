const useCurrency = () => {
  const formatCurrency = (amount) => {
    const options2 = {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    };
    const numberFormat2 = new Intl.NumberFormat("en-US", options2);

    return numberFormat2.format(amount);
    // expected output: "$654,321"
  };
  return { formatCurrency };
};

export { useCurrency };
