"use client";

import styled from "styled-components";

export const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;

  .helper-form {
    background: white;
    border-radius: 1rem;
    padding: 3rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      padding: 2rem;
    }
  }

  .form-section {
    margin-bottom: 2.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .section-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 0.5rem;
  }

  .section-description {
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 1.5rem;
  }

  .ingredients-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .ingredient-input-row {
    display: flex;
    gap: 0.75rem;
  }

  .ingredient-input {
    flex: 1;
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
  }

  .remove-btn {
    width: 2.5rem;
    height: 2.5rem;
    background: #fee2e2;
    color: #ef4444;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: #fecaca;
    }
  }

  .add-ingredient-btn {
    padding: 0.5rem 1rem;
    background: white;
    color: #86C540;
    border: 2px dashed #86C540;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: rgba(134, 197, 64, 0.05);
    }
  }

  .allergy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }

  .allergy-checkbox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      border-color: #86C540;
    }

    input[type="checkbox"] {
      width: 1.25rem;
      height: 1.25rem;
      cursor: pointer;
      accent-color: #86C540;
    }

    span {
      font-weight: 500;
      text-transform: capitalize;
    }
  }

  .error-message {
    padding: 1rem;
    background: #fef2f2;
    border: 1px solid #fecaca;
    border-left: 4px solid #ef4444;
    border-radius: 0.5rem;
    color: #991b1b;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  .submit-btn {
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

  .results-section {
    margin-top: 3rem;
  }

  .results-title {
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 2rem;
    text-align: center;
  }

  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1.5rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .recipe-card {
    background: white;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-4px);
    }
  }

  .recipe-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .recipe-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #111827;
    flex: 1;
  }

  .match-score {
    background: linear-gradient(135deg, #86C540, #5DC2D1);
    color: white;
    padding: 0.375rem 0.75rem;
    border-radius: 9999px;
    font-weight: 700;
    font-size: 0.875rem;
    white-space: nowrap;
  }

  .match-bar {
    width: 100%;
    height: 0.5rem;
    background: #e5e7eb;
    border-radius: 9999px;
    overflow: hidden;
    margin-bottom: 1.5rem;
  }

  .match-fill {
    height: 100%;
    background: linear-gradient(135deg, #86C540, #5DC2D1);
    transition: width 0.5s ease;
  }

  .ingredients-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
.required-btn {
  width: 3rem;
  height: 3rem;
  background: white;
  color: #d1d5db;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1.75rem;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #fbbf24;
  }

  &.active {
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    color: white;
    border-color: #f59e0b;
  }
}

.required-info {
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  background: #fef3c7;
  border-left: 4px solid #fbbf24;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: #78350f;
}
  .has-ingredients,
  .needs-ingredients {
    strong {
      display: block;
      font-size: 0.875rem;
      margin-bottom: 0.25rem;
    }

    p {
      color: #4b5563;
      font-size: 0.875rem;
      line-height: 1.5;
    }
  }

  .more-ingredients {
    display: inline-block;
    margin-left: 0.5rem;
    color: #6b7280;
    font-size: 0.75rem;
  }

  .recipe-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    border-top: 1px solid #e5e7eb;
  }

  .total-ingredients {
    font-size: 0.875rem;
    color: #6b7280;
  }

  .view-link {
    color: #86C540;
    font-weight: 600;
    font-size: 0.875rem;
    transition: color 0.3s;

    &:hover {
      color: #76B530;
    }
  }
`;