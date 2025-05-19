import React from 'react';

const InputField = ({ id, type, placeholder, value, onChange }) => (
    <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full mb-5 p-3 focus:outline-none focus:sky-green-500 focus:ring-2 focus:ring-indigo-600
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-red-500 invalid:text-red-600
      focus:invalid:border-red-500 focus:invalid:ring-red-500 bg-transparent border border-slate-800 rounded-3xl"
    />
);

export default InputField;
