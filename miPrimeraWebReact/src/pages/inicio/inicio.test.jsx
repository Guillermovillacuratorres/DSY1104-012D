import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Inicio from './inicio';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('renderiza sin errores', () => {
    render(
        <MemoryRouter>
            <Inicio />
        </MemoryRouter>
    );
    expect(document.body).toBeInTheDocument(); 
  });
});