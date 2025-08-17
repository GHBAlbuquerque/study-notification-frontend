import { render, screen } from '@testing-library/react';
import { describe, expect, test } from "vitest"
import DefaultTextArea from "."

const testId="test-id";

describe('DefaultTextArea', () => {
    test('renders select with no label', () => {
        render (<DefaultTextArea data-testid={testId} />)
        const defaultTextArea = screen.getByTestId(testId)

    expect(defaultTextArea).toBeInTheDocument();
    })
})