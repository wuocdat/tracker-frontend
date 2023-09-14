import moment from "moment";

export const formatTime = (timeStr: string): string => {
    return moment(timeStr).format("DD-MM-YYYY hh:mm:ss");
};
