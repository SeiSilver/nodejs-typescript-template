export class LogUtils {

    private static ERROR_COLOR: string = "\x1b[31m";
    private static INFO_COLOR: string = "\x1b[32m";
    private static WARNING_COLOR: string = "\x1b[33m";
    private static DEBUG_COLOR: string = "\x1b[36m";
    private static CLEAR_COLOR: string = "\x1b[0m";

    public static info(message: any): void {
        console.log(LogUtils.stringFormat(Logger.INFO, JSON.stringify(message)))
    }

    public static warn(message: any): void {
        console.log(LogUtils.stringFormat(Logger.WARNING, JSON.stringify(message)))
    }

    public static debug(message: any): void {
        console.log(LogUtils.stringFormat(Logger.DEBUG, JSON.stringify(message)))
    }

    public static error(message: string, error?: any): void {
        if (error) {
            console.error(LogUtils.stringFormat(Logger.ERROR, `${message}\n${error}`))
        } else {
            console.error(LogUtils.stringFormat(Logger.ERROR, `${message}`))
        }
    }

    private static getCurrentDate() {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString('vi-VN');
        return `${formattedDate}`;
    }

    private static stringFormat(level: Logger, message: string): string {
        switch (level) {
            case Logger.INFO:
                return `${(this.getCurrentDate())} ${LogUtils.INFO_COLOR} => INFO ${message} ${LogUtils.CLEAR_COLOR}`;
            case Logger.DEBUG:
                return `${(this.getCurrentDate())} ${LogUtils.DEBUG_COLOR} => DEBUG ${message} ${LogUtils.CLEAR_COLOR}`
            case Logger.WARNING:
                return `${(this.getCurrentDate())} ${LogUtils.WARNING_COLOR} => WARN ${message} ${LogUtils.CLEAR_COLOR}`
            case Logger.ERROR:
                return `${(this.getCurrentDate())} ${LogUtils.ERROR_COLOR} => ERROR ${message} ${LogUtils.CLEAR_COLOR}`;
            default:
                return ''
        }
    }

}

export enum Logger {
    INFO, DEBUG, WARNING, ERROR
}