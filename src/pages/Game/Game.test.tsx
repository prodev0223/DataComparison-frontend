import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Game from "./game"

test('renders game page', () => {
  const { container } = render(<Game />);
  const linkElement = screen.getByText("Discrepancies For Game");
  expect(linkElement).toBeInTheDocument();
  const tableContent = container.getElementsByClassName('ant-table-tbody')[0]
  expect(tableContent).toBeInTheDocument();
  const tableRows = tableContent.childNodes;
  const rowLength = tableRows.length;
  const lastCell: Element = tableRows[0].lastChild as unknown as Element;
  const actionButtons = lastCell.getElementsByTagName("button");
  fireEvent.click(actionButtons[0]);
  expect(tableContent.childNodes.length).toBe(rowLength - 1);
});
