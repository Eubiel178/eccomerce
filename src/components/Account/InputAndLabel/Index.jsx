import { FormContent } from "./Styles";

const InputAndLabel = ({ id, label, type, name, placeholder, set, value }) => {
  return (
    <FormContent>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={(event) => {
          set(event.target.value);
        }}
        value={value}
        required
      />
    </FormContent>
  );
};

export default InputAndLabel;
