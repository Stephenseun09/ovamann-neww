const dateFormatter = (dateToFormat: any) => {
  const split = dateToFormat.split("-");
  let date = new Date();
  date.setMonth(split[1] - 1);
  const month = date.toLocaleString("en-US", {
    month: "short",
  });
  const day = split[2].substring(0, 2);
  const year = split[0];

  return `${month} ${day}, ${year}`;
};

export default dateFormatter;
