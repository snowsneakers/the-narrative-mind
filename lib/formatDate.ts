import moment from "moment";

export const format_date = ({ date }: { date: string }) => {
  return moment(date).format("MM/DD/YY");
};
