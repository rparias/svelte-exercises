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
        const { container } = render(ContactCard);
        const username = container.querySelector('h1');
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
    it('Renders the name when props are passed', () => {
        const { container } = render(ContactCard, { userName: 'Ronald' });
        const username = container.querySelector('h1');
        expect(username).toHaveTextContent('Ronald');
    });
    it('Renders the job title when props are passed', () => {
        const { container } = render(ContactCard, { jobTitle: 'Software Engineer' });
        const jobTitle = container.querySelector('h2');
        expect(jobTitle).toHaveTextContent('Software Engineer');
    });
    it('Renders the job description when props are passed', () => {
        const { container } = render(ContactCard, { jobDescription: 'Software Engineer is an awsome profession' });
        const jobDescription = container.querySelector('p');
        expect(jobDescription).toHaveTextContent('Software Engineer is an awsome profession');
    });
    it('Renders the image when props are passed', () => {
        const imageSvelte: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/199px-Svelte_Logo.svg.png';
        const { container } = render(ContactCard, { imageUrl: imageSvelte });
        const image = container.querySelector('img');
        expect(image).toHaveProperty('src', imageSvelte);
    });
    it('Renders the words User Name when props are not passed', () => {
        const { container } = render(ContactCard);
        const username = container.querySelector('h1');
        expect(username).toHaveTextContent('User Name');
    });
});

