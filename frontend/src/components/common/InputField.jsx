

const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-200"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg border text-zinc-900 px-4 py-3 bg-white outline-none transition
          placeholder:text-zinc-500
          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
              : "border-zinc-700 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20"
          }`}
      />

      {error && (
        <p className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;