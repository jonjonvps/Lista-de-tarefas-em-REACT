import React from "react";
import PropyTypes from 'prop-types';
import { FaEdit, FaWindowClose} from 'react-icons/fa';

import './Tarefas.css'

export default function Tarefas( { tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
            <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete" />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propyTypes = {
  handleEdit: PropyTypes.func.isRequired,
  handleDelete: PropyTypes.func.isRequired,
  tarefas: PropyTypes.array.isRequired,
}
