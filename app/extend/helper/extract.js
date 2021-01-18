const is = require('is');

const passTypeError = (field, type) => {
  const msg = `参数：${field} 必须为 ${type} 类型`;
  throw new Error(msg);
};

// 类型校验
const DEFAULT_TYPE_CHECKERS = {
  string: {
    validate: (val, rule) => {
      const { field, type } = rule;
      if (!is.string(val)) {
        passTypeError(field, type);
      }
      return val;
    },
  },

  number: {
    convert: (val) => (val ? Number(val) : val), // 对于null，undefined返回原值
    validate: (val, rule) => {
      const { field, type } = rule; // number && 不是 NaN
      if (is.number(val) && !is.nan(val)) {
        return val;
      } else {
        passTypeError(field, type);
      }
    },
  },

  boolean: {
    convert: (val) => {
      const trueVals = ['1', 'true', 1, true];
      const falseVals = ['0', 'false', 0, false];
      if (trueVals.includes(val)) {
        return true;
      } else if (falseVals.includes(val)) {
        return false;
      } else {
        return val;
      }
    },
    validate: (val, rule) => {
      const { field, type } = rule;
      if (!is.boolean(val)) {
        passTypeError(field, type);
      }
      return val;
    },
  },

  array: {
    validate(val, rule) {
      const { field, type } = rule;
      if (!is.array(val)) {
        passTypeError(field, type);
      }
      return val;
    },
  },

  object: {
    validate(val, rule) {
      const { field, type } = rule;
      if (!is.object(val) || is.null(val)) {
        passTypeError(field, type);
      }
      return val;
    },
  },
};

// 其他校验
const DEFAULT_CHECKERS = {
  requiredChecker(rawValue, rule) {
    const { field, isRequired = false, defaultValue, errMsg } = rule; // 参数未定义
    if (is.undefined(rawValue)) {
      // 要求必须定义
      if (isRequired) {
        const msg = errMsg || `参数：${field} 不能未定义`;
        throw new Error(msg);
      } else {
        // 非必须定义参数，尝试使用默认值
        if (is.defined(defaultValue)) return defaultValue;
      }
    } // 参数已经定义，直接返回

    return rawValue;
  },

  includesChecker(val, rule) {
    const { field, includes } = rule;
    if (includes && includes.length) {
      if (!includes.includes(val)) {
        const msg = `参数：${field} 必须为以下元素之一 ${JSON.stringify(
          includes
        )}, 当前值为${val}`;
        throw new Error(msg);
      }
    }
  },
};

class Extracter {
  constructor() {
    this.typeCheckers = DEFAULT_TYPE_CHECKERS;
    this.checkers = DEFAULT_CHECKERS;
  }
  /**
   * @description 对传入的值，进行类型校验
   * @param {Any} rawValue
   * @param {Object} rule
   * @return {Any} 返回符合规则的值
   * @memberof Extracter
   */

  checkType(rawValue, rule) {
    const { type = 'string', errMsg } = rule;

    let temp = rawValue;
    const { validate, convert } = this.typeCheckers[type]; // 如果需要转换，先转换再校验
    if (convert) {
      temp = convert(rawValue);
    } // 校验
    try {
      temp = validate(temp, rule);
    } catch (e) {
      const { message } = e;
      const printVal = is.object(rawValue)
        ? JSON.stringify(rawValue)
        : rawValue;
      const msg =
        errMsg || `${message}, 当前值为${printVal}，类型为 ${typeof rawValue}`;

      throw new Error(msg);
    }

    return temp;
  }
  /**
   * @description 入口函数，根据一定规则提取对象信息
   * @param {Object} data 待提取对象
   * @param {Array} [rules=[]] 规则数组
   * @return {Object} 提取后的值
   * @memberof Extracter
   */

  extract(data, rules = []) {
    if (!data) {
      throw new Error('参数不能为空');
    }
    if (!rules.length) {
      throw new Error('校验规则不能为空');
    }
    const result = {};
    for (let rule of rules) {
      const {
        field, // 字段名
        validate, // 自定义校验方法
        includes, // 枚举范围
        subFields, // 子元素规则
        canBeBlank = false, // 是否允许传入空值
      } = rule;
      const rawValue = data[field]; // 原始值 // 有自定义校验方法，统一走该方法，其他校验不参与
      if (validate) {
        result[field] = validate(rawValue, rule);
        continue;
      } // 默认校验逻辑 // 有值

      if (is.defined(rawValue)) {
        // 如果允许为空，并且确实为空，不做后续校验
        if (canBeBlank && is.null(rawValue)) {
          continue;
        }

        result[field] = this.checkType(rawValue, rule);
        if (includes && includes.length) {
          this.checkers.includesChecker(result[field], rule);
        }

        if (subFields && subFields.length) {
          const temp = result[field]; // 如果是数组，对数组元素应用subFields规则
          if (is.array(temp)) {
            result[field] = temp.map((item) => this.extract(item, subFields));
          } // 如果是对象，对其本身应用subFields规则
          if (is.object(temp)) {
            result[field] = this.extract(temp, subFields);
          }
        }
        continue;
      } // 参数为空

      const val = this.checkers.requiredChecker(rawValue, rule);
      if (val) {
        result[field] = val;
      }
    }

    return result;
  }
}

const instance = new Extracter();

module.exports = {
  extract: instance.extract.bind(instance),
};
