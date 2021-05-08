/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable no-async-promise-executor */
/* eslint-disable no-plusplus */
import Schema, { RuleItem } from 'async-validator';
import React from 'react';
import warning from '../../utils/warning';

type ValidateRuleType = (
  name: string,
  value: unknown,
  rule: RuleItem,
  messageVariables: Record<string, string>
) => Promise<string[]>;

// type ValidateRules =

export const validateRule: ValidateRuleType = async (name, value, rule) => {
  const validator = new Schema({
    [name]: [rule],
  });
  try {
    await validator.validate({ [name]: value });
  } catch ({ errors, fields }) {
    if (errors) {
      return errors.map((item, index) => {
        if (React.isValidElement(item.message)) {
          return React.cloneElement(item.message, { key: `error_at_${index}` });
        }
        return item.message;
      });
    }
  }
  return [];
};

export const validateRules = (
  name: string,
  value: string,
  rules: RuleItem[],
  validateFirst: boolean,
  messageVariables: Record<string, string>,
) => {
  const filledRules = rules.map((rule) => {
    const originValidator = rule.validator;
    if (!originValidator) {
      return rule;
    }
    // reset validator
    const validator = (
      rule: RuleItem,
      value: any,
      callback: (error?: string) => void,
    ) => {
      let hasPromise = false;
      /**
       * 如果originValidator返回的是primise，则忽略callback，否则callback将会被调用
       * @param args
       */
      const wrappedCallback = (...args: string[]) => {
        // 获取originValidator执行返回的结果是否为一个promise
        Promise.resolve().then(() => {
          warning(
            !hasPromise,
            'Your validator function has already return a promise. `callback` will be ignored.',
          );
          // 如果validator返回结果是一个promise，callback会被忽略
          if (!hasPromise) {
            callback && callback(...args);
          }
        });
      };
      const promise = originValidator(rule, value, wrappedCallback);
      hasPromise = (promise && typeof promise.then === 'function' && typeof promise.catch === 'function') as boolean;
      warning(hasPromise, '`callback` is deprecated. Please return a promise instead.');
      if (hasPromise) {
        (promise as Promise<void>).then(() => {
          callback();
        }).catch((err) => {
          callback(err || ' ');
        });
      } else {
        (promise as Promise<void>).then();
      }
    };
    return {
      ...rule,
      validator,
    };
  });
  let result: Promise<string[]>;
  // 是否出现错误的时候中断
  if (validateFirst === true) {
    result = new Promise(async (resolve, reject) => {
      /* eslint-disable no-await-in-loop */
      for (let i = 0; i < filledRules.length; i++) {
        const errors = await validateRule(name, value, filledRules[i], messageVariables);
        if (errors.length) {
          reject(errors);
          return;
        }
      }
      /* eslint-enable */
      resolve([]);
    });
  } else {
    // eslint-disable-next-line no-async-promise-executor
    result = new Promise(async (resolve, reject) => {
      Promise.all(filledRules.map((item) => validateRule(name, value, item, messageVariables)))
        .then((errors) => {
          const hasError = errors.some((item) => item.length > 0);
          if (!hasError) {
            resolve([]);
          } else {
            reject(errors);
          }
        });
    });
  }
  return result;
};
