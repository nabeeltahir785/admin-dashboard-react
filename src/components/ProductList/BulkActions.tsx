import React from 'react';
import { Trash2, Archive, Edit, RefreshCw } from 'lucide-react';

interface BulkActionsProps {
  selectedCount: number;
  onDelete: () => void;
  onStatusUpdate: (status: string) => void;
  onCategoryUpdate: (category: string) => void;
}

export const BulkActions: React.FC<BulkActionsProps> = ({
  selectedCount,
  onDelete,
  onStatusUpdate,
  onCategoryUpdate,
}) => {
  if (selectedCount === 0) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 lg:left-1/2 lg:right-auto lg:-translate-x-1/2 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <span className="text-sm text-gray-600 whitespace-nowrap">
          {selectedCount} item{selectedCount !== 1 ? 's' : ''} selected
        </span>

        <div className="hidden sm:block h-4 w-px bg-gray-300" />

        <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
          <button
            onClick={onDelete}
            className="flex items-center space-x-1 text-red-600 hover:text-red-700"
          >
            <Trash2 className="w-4 h-4" />
            <span>Delete</span>
          </button>

          <select
            onChange={(e) => onStatusUpdate(e.target.value)}
            className="block w-32 text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Update Status</option>
            <option value="active">Set Active</option>
            <option value="draft">Set Draft</option>
            <option value="archived">Archive</option>
          </select>

          <select
            onChange={(e) => onCategoryUpdate(e.target.value)}
            className="block w-32 text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Move to Category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
          </select>
        </div>
      </div>
    </div>
  );
};