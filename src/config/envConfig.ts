import dotenv from "dotenv";
import * as process from "process";
import {LogUtils} from "@utils/logUtils";

dotenv.config();

class EnvConfig {

    private static PROFILE: string = process.env.PROFILE ? process.env.PROFILE.toLowerCase() : 'dev';
    public static TOKEN: string = process.env.TOKEN ?? '';

    static initialize() {
        EnvConfig.validateRequireEnv();
        LogUtils.info(`NodeJS is running with profile: ${EnvConfig.PROFILE}`)
        switch (EnvConfig.PROFILE.toLowerCase()) {
            case 'dev':
                EnvConfig.TOKEN = '';
                break;
            case 'prod':
                EnvConfig.TOKEN = process.env.TOKEN ?? '';
                break;
            default:
                break;
        }
    }

    private static validateRequireEnv() {
        if (!EnvConfig.PROFILE) {
            LogUtils.error("PROFILE is missing")
            process.exit(1);
        }
        if (!EnvConfig.TOKEN) {
            LogUtils.error("TOKEN is missing")
            process.exit(1);
        }
    }

}

EnvConfig.initialize();

export default EnvConfig;
