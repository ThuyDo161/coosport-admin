/* eslint-disable @typescript-eslint/no-explicit-any */
import { useI18n } from "vue-i18n";

type Callback = (error?: string | Error | undefined) => void;

interface LengthRange {
  min: number;
  max: number;
  message: string;
}

export const useValidator = () => {
  const { t } = useI18n();

  const required = (message?: string) => {
    return {
      required: true,
      message: message || t("message.required"),
    };
  };

  const lengthRange = (val: any, callback: Callback, options: LengthRange) => {
    const { min, max, message } = options;
    if (val.length < min || val.length > max) {
      callback(new Error(message));
    } else {
      callback();
    }
  };

  const ValidService = {
    checkEmail: {
      pattern:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: t("message.email"),
      trigger: "blur",
    },

    checkPasswordLength: {
      type: "string",
      validator: (_rule: any, value: string | any[], callback: Callback) => {
        if (value && value.length < 6) {
          callback(new Error(t("auth.login.message.minLength")));
        } else if (value && value.length > 20) {
          callback(new Error(t("auth.login.message.maxLength")));
        }
        callback();
      },
      required: false,
      trigger: "blur",
    },
  };

  return {
    required,
    lengthRange,
    ValidService,
  };
};
