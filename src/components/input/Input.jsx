import style from './Input.module.css';

function Input({ type, label, name, placeholder, value, handeler }) {
  return (
    <div className={style.inputBox}>
      <label htmlFor={name} className={style.inputlebel}>
        {label}

        <input
          type={type}
          className={style.inputfield}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={handeler}
        />
      </label>
    </div>
  );
}

export default Input;
