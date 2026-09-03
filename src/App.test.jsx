import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import { navigation, projects, socials } from './data';

function renderApp() {
  render(<App />);
}

describe('portfolio homepage', () => {
  it('renders the main sections and matching in-page navigation links', () => {
    renderApp();

    const expectedSections = ['about', 'experience', 'projects', 'education', 'skills', 'contact'];
    expectedSections.forEach((sectionId) => {
      expect(document.getElementById(sectionId)).toBeInTheDocument();
    });

    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /featured projects/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /education/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /skills & technologies/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /let's talk/i })).toBeInTheDocument();

    const nav = screen.getByRole('navigation');
    const navLinks = within(nav).getAllByRole('link');

    expect(navLinks).toHaveLength(navigation.length);
    navigation.forEach((item) => {
      expect(nav).toHaveTextContent(item.name);
      expect(nav.querySelector(`a[href="#${item.id}"]`)).toBeInTheDocument();
    });
  });

  it('keeps project and social links valid', () => {
    renderApp();

    projects.forEach((project) => {
      const link = screen.getByRole('link', { name: new RegExp(project.title, 'i') });
      expect(link).toHaveAttribute('href', project.link);
      expect(link).toHaveAttribute('target', '_blank');
    });

    socials.forEach((social) => {
      const footerLink = screen.getAllByRole('link', { name: social.name }).find((link) => link.closest('footer'));
      expect(footerLink).toBeDefined();
      expect(footerLink).toHaveAttribute('href', social.link);
    });

    const contactSection = document.getElementById('contact');
    expect(contactSection).toBeInTheDocument();

    const contactLinks = within(contactSection).getAllByRole('link');
    expect(contactLinks).toHaveLength(socials.length - 1);
    contactLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
    });
  });
});