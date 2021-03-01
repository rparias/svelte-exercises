import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, cleanup } from '@testing-library/svelte';
import ContactCard from './ContactCard.svelte';

describe('Layout', () => {
    it('Has image in the header', () => {
        const { container } = render(ContactCard);
        const image = container.querySelector('img');
        expect(image).toBeInTheDocument();
    });
    it('Has user name in the header', () => {
        const { getByText } = render(ContactCard);
        const username = getByText('User Name');
        expect(username).toBeInTheDocument();
    });
    it('Has job title in the header', () => {
        const { getByText } = render(ContactCard);
        const jobTitle = getByText('Job Title');
        expect(jobTitle).toBeInTheDocument();
    });
    it('Has a short description', () => {
        const { getByText } = render(ContactCard);
        const description = getByText('A short description');
        expect(description).toBeInTheDocument();
    });
});

