import React from "react";
import PropyTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({ handleSubmit, changeInput, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input
        onChange={changeInput}
        type="text"
        value={novaTarefa}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

// Form.defaultProps = {
//   novaTarefa: 'valor padrão',
// }

Form.propyTypes = {
  changeInput: PropyTypes.func.isRequired,
  handleSubmit: PropyTypes.func.isRequired,
  novaTarefa: PropyTypes.string.isRequired,
}
