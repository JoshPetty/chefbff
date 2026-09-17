"use client";

import styled from "styled-components";

export const Container = styled.div`
  .recipe-form {
    max-width: 48rem;
    margin: 0 auto;
    background: white;
    border-radius: 1rem;
    padding: 3rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

    @media (max-width: 768px) {
      padding: 2rem;
    }
  }

  .form-group {
    margin-bottom: 2rem;
  }

  .form-label {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.5rem;
  }

  .form-input,
  .form-textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: all 0.3s;

    &:focus {
      outline: none;
      border-color: #86C540;
      box-shadow: 0 0 0 3px rgba(134, 197, 64, 0.1);
    }

    &::placeholder {
      color: #9ca3af;
    }
  }

  .form-textarea {
    resize: vertical;
    min-height: 5rem;
  }

  .form-file {
    width: 100%;
    padding: 0.75rem;
    border: 2px dashed #e5e7eb;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      border-color: #86C540;
      background: rgba(134, 197, 64, 0.05);
    }
  }

  .dynamic-field {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    align-items: flex-start;

    &.with-number {
      .step-number {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        background: linear-gradient(135deg, #86C540, #5DC2D1);
        color: white;
        border-radius: 50%;
        font-weight: 700;
        font-size: 0.875rem;
        flex-shrink: 0;
        margin-top: 0.75rem;
      }
    }

    input,
    textarea {
      flex: 1;
    }
  }

  .remove-button {
    padding: 0.75rem 1rem;
    color: #ef4444;
    font-weight: 500;
    font-size: 0.875rem;
    background: white;
    border: 1px solid #fee2e2;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s;
    white-space: nowrap;

    &:hover {
      background: #fef2f2;
      border-color: #fecaca;
    }
  }

  .add-button {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    color: #86C540;
    font-weight: 600;
    font-size: 0.875rem;
    background: white;
    border: none;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #76B530;
    }
  }

  .error-message {
    padding: 1rem;
    background: #fef2f2;
    border: 1px solid #fecaca;
    border-left: 4px solid #ef4444;
    border-radius: 0.5rem;
    color: #991b1b;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  .submit-button {
    width: 100%;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #86C540, #5DC2D1);
    color: white;
    font-weight: 600;
    font-size: 1.125rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4px 6px rgba(134, 197, 64, 0.2);

    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #76B530, #4DB2C1);
      box-shadow: 0 6px 12px rgba(134, 197, 64, 0.3);
      transform: translateY(-2px);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;