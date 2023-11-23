import { render, screen ,fireEvent } from '@testing-library/react'
import App from './App'

test("rendering all the nine buttons",() => {
    render(<App />)
    const box = screen.getAllByRole('button');
    expect(box).toHaveLength(9);
})

test("handeling click event",() => {
    render(<App />)
    const firstBox = screen.getAllByRole('button')[0];
    fireEvent.click(firstBox);
    expect(firstBox.textContent).toBe('X')
})