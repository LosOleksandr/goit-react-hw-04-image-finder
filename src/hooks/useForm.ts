// import { useState, ChangeEvent } from 'react';

// const useForm = <T extends { [key: string]: string }>(initialValues: T) => {
//   const [values, setValues] = useState<T>(initialValues);

//   const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
//     const name = evt.target.name;
//     const value = evt.target.value;

//     setValues({ ...values, [name]: value });
//   };

//   const reset = () => setValues(initialValues);

//   const resetField = (fieldName: keyof T) => {
//     setValues({
//       ...values,
//       [fieldName]: initialValues[fieldName]
//     });
//       };

//   const init = (fieldName: keyof T) => ({
//     onChange,
//     name: fieldName,
//     value: values[fieldName],
//   });

//   return {
//     formData: values,
//     init,
//     reset,
//     resetField
//   };
// };

// export default useForm;
