import * as yup from 'yup';
import sampleData from "../assets/jsons/sample.json";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const shapeSchema = sampleData.reduce((prev, field) => {
  let validation = yup.string();
  if (field.required) {
    validation = validation.required('Required');
  }
  if (field.id === 'email') {
    validation = validation.email('Invalid email');
  }
  // ex: 14352004005
  if (field.id === 'phone') {
    validation = validation.matches(phoneRegExp, 'Invalid phone');
  }
  return {
    ...prev,
    [field.id]: validation,
  }
}, {});

const UserValidationSchema = yup.object().shape(shapeSchema);

export default UserValidationSchema;
