import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, cleanup } from '@testing-library/svelte';
import App from './App.svelte';
import type { AppProps } from './DTO/AppProps';

test('shows proper heading in caps when rendered', () => {
    const props: AppProps = { name: 'Ronald' };
    const { getByText } = render(App, props);
    expect(getByText('Hello friend!')).toBeInTheDocument();
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

test('Has input for job description', () => {
    const { queryByPlaceholderText } = render(App);
    const jobInput = queryByPlaceholderText('Input the job description');
    expect(jobInput).toBeInTheDocument();
})

test('Sets value name on name variable', () => {
    const { queryByPlaceholderText } = render(App);
    const nameInput = queryByPlaceholderText('Your name');
    fireEvent.input(nameInput, changeEvent('my-name'));
    expect(nameInput).toHaveValue('my-name');
})

test('Sets job description on jobDescription variable', () => {
    const { queryByPlaceholderText } = render(App);
    const jobInput = queryByPlaceholderText('Input the job description');
    fireEvent.input(jobInput, changeEvent('this is a job description'));
    expect(jobInput).toHaveValue('this is a job description');
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