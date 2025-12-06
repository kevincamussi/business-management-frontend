import React from "react";

type SubmitButtonProps = {
  loading: boolean;
  label: string;
};

const SubmitButton = ({ loading, label }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`py-2 rounded text-white transition ${
        loading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600"
      }`}
    >
      {loading ? "Registering..." : label}
    </button>
  );
};

export default SubmitButton;
