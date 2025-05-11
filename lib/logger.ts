import pino from "pino";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const logger = pino({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  timestamp: () =>
    `,"time":"${dayjs().tz("Asia/Jakarta").format("YYYY-MM-DD HH:mm:ss")}"`,
});

export default logger;
