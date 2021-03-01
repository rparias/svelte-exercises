import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, cleanup } from '@testing-library/svelte';
import App from './App.svelte';

test('shows proper heading in caps when rendered', () => {
    const { getByText } = render(App, { name: 'Ronald' });
    expect(getByText('Hello RONALD!')).toBeInTheDocument();
})

test('Count age increments when button is clicked', async () => {
    const { getByText } = render(App);
    const text = getByText('My age is 1');
    const button = getByText('Increase age');

    await fireEvent.click(button);
    expect(text).toHaveTextContent('My age is 2');
})

test('changes name when change name button is clicked', async () => {
    const { container, getByText } = render(App);
    const text = container.querySelector('h1');
    const button = getByText('Change name');

    await fireEvent.click(button);
    expect(text).toHaveTextContent('Hello PAUL!');
})

test('Has input for name', () => {
    const { queryByPlaceholderText } = render(App);
    const nameInput = queryByPlaceholderText('Your name');
    expect(nameInput).toBeInTheDocument();
})

test('Sets value name on name variable', () => {
    const { queryByPlaceholderText } = render(App);
    const nameInput = queryByPlaceholderText('Your name');
    fireEvent.input(nameInput, changeEvent('my-name'));
    expect(nameInput).toHaveValue('my-name');
})

test('Changes name on h1 element when a name is inputted', async () => {
    const { container, queryByPlaceholderText } = render(App);
    const text = container.querySelector('h1');
    const nameInput = queryByPlaceholderText('Your name');
    await fireEvent.input(nameInput, changeEvent('my-name'));
    expect(text).toHaveTextContent('Hello MY-NAME!');
})

const changeEvent = (content: string) => {
    return {
        target: {
            value: content,
        },
    };
};