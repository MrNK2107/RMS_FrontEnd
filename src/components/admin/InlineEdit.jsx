import React, { useState } from 'react';
import Icon from '../../common/Icon';

const InlineEdit = ({ value: initialValue, onSave, type = 'text', placeholder = 'Enter value' }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleSave = () => {
    if (value !== initialValue) {
      onSave?.(value);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setValue(initialValue);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (!isEditing) {
    return (
      <div className="group flex items-center gap-2">
        <span className="text-gray-900">{value || placeholder}</span>
        <button
          onClick={() => setIsEditing(true)}
          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded"
        >
          <Icon name="edit" size={14} className="text-gray-400" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="px-2 py-1 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        autoFocus
      />
      <button
        onClick={handleSave}
        className="p-1 text-green-600 hover:bg-green-50 rounded"
      >
        <Icon name="check" size={16} />
      </button>
      <button
        onClick={handleCancel}
        className="p-1 text-red-600 hover:bg-red-50 rounded"
      >
        <Icon name="close" size={16} />
      </button>
    </div>
  );
};

export default InlineEdit;
