import React from 'react';
import Card from '../../ui/Card';
import Tag from '../../common/Tag';
import Icon from '../../common/Icon';

const TaskCard = ({ task, onComplete, onViewDetails }) => {
  const { id, title, description, priority, status, dueDate, assignedBy } = task;

  const priorityVariants = {
    high: 'danger',
    medium: 'warning',
    low: 'default',
  };

  const statusVariants = {
    pending: 'warning',
    'in-progress': 'info',
    completed: 'success',
  };

  return (
    <Card hover className="relative">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="flex gap-2">
          <Tag variant={priorityVariants[priority]} size="sm">
            {priority}
          </Tag>
          <Tag variant={statusVariants[status]} size="sm">
            {status}
          </Tag>
        </div>
      </div>

      <div className="space-y-2 mt-4">
        {dueDate && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Icon name="calendar" size={16} />
            <span>Due: {new Date(dueDate).toLocaleDateString()}</span>
          </div>
        )}
        {assignedBy && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Icon name="users" size={16} />
            <span>Assigned by: {assignedBy}</span>
          </div>
        )}
      </div>

      <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
        <button
          onClick={() => onViewDetails?.(task)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          View Details
        </button>
        {status !== 'completed' && (
          <button
            onClick={() => onComplete?.(task)}
            className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium flex items-center justify-center gap-2"
          >
            <Icon name="check" size={16} />
            Mark Complete
          </button>
        )}
      </div>
    </Card>
  );
};

export default TaskCard;
