import validator from "validator";

export const validateData = (data, rules) => {
  let errors = {};

  Object.keys(data).forEach((field) => {
    if (rules.hasOwnProperty(field)) {
      let fielderrors = [];
      let fieldValue = data[field];
      if (rules[field].true) {
        if (!fieldValue) {
          fielderrors.push("Must be checked!");
        }
      } else {
        if (rules[field].required && validator.isEmpty(fieldValue)) {
          fielderrors.push("Value Required");
        }
        if (!validator.isEmpty(data[field])) {
          if (
            rules[field].minLength &&
            !validator.isLength(fieldValue, rules[field].minLength)
          ) {
            fielderrors.push(
              `Enter at least ${rules[field].minLength} characters`
            );
          }

          if (rules[field].alpha && !validator.isAlpha(fieldValue)) {
            fielderrors.push("Enter Only Letters");
          }

          if (rules[field].email && !validator.isEmail(fieldValue)) {
            fielderrors.push("Enter a valid email address");
          }

          if (
            rules[field].equals &&
            !validator.equals(fieldValue, data[rules[field].equals])
          ) {
            fielderrors.push("Value's don't match!");
          }
        }
      }
      if (fielderrors.length > 0) {
        errors[field] = fielderrors;
      }
    }
  });

  return errors;
};
