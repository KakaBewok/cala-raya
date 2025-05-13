import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import pino from "pino";

dayjs.extend(utc);
dayjs.extend(timezone);

const logger = pino({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  timestamp: () =>
    `,"time":"${dayjs().tz("Asia/Jakarta").format("YYYY-MM-DD HH:mm:ss")}"`,
});

export default logger;
