import { render, screen } from '@testing-library/react';
import { DefaultButton }  from './index';
import { BoxIcon } from 'lucide-react';
import {describe, test, expect } from 'vitest';

const testId = "default-button";

describe('DefaultButton', () => {
    test('renders button with correct Icon', () => {
        render (<DefaultButton icon={<BoxIcon/>} data-testid={testId}/>)
        const defaultButton = screen.getByTestId(testId)
        const icon = defaultButton.querySelector('svg')

    expect(defaultButton).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    })
})

describe('DefaultButton', () => {
    test('applies the correct class when color is danger', () => {
        render (<DefaultButton icon={<BoxIcon/>} data-testid={testId} color="danger"/>)
        const defaultButton = screen.getByTestId(testId)


    expect(defaultButton).toBeInTheDocument();
    expect(defaultButton.className).toMatch(/danger/)
    })
})

describe('DefaultButton', () => {
    test('applies the correct class when color is ghost', () => {
        render (<DefaultButton icon={<BoxIcon/>} data-testid={testId} color="ghost"/>)
        const defaultButton = screen.getByTestId(testId)


    expect(defaultButton).toBeInTheDocument();
    expect(defaultButton.className).toMatch(/ghost/)
    })
})