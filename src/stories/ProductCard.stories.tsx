import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from '../components/ProductList/ProductCard';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const meta = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
        <DndProvider backend={HTML5Backend}>
          <Story />
        </DndProvider>
    ),
  ],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockProduct = {
  id: '1',
  name: 'Sample Product',
  description: 'A sample product description',
  price: 99.99,
  category: 'electronics',
  status: 'active' as const,
  imageUrl: 'https://source.unsplash.com/400x400/?electronics',
  order: 1,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const Default: Story = {
  args: {
    product: mockProduct,
    index: 0,
    onReorder: () => {},
    onSelect: () => {},
    isSelected: false,
  },
};

export const Selected: Story = {
  args: {
    ...Default.args,
    isSelected: true,
  },
};

export const NoImage: Story = {
  args: {
    ...Default.args,
    product: {
      ...mockProduct,
      imageUrl: '',
    },
  },
};

export const DraftStatus: Story = {
  args: {
    ...Default.args,
    product: {
      ...mockProduct,
      status: 'draft' as const,
    },
  },
};

export const ArchivedStatus: Story = {
  args: {
    ...Default.args,
    product: {
      ...mockProduct,
      status: 'archived' as const,
    },
  },
};