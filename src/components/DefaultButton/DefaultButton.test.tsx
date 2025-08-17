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