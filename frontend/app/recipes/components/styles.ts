"use client";

import styled from "styled-components";

export const Container = styled.div`
  .recipes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1025px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .empty-state {
    text-align: center;
    padding: 6rem 2rem;

    .emoji {
      font-size: 6rem;
      display: block;
      margin-bottom: 1.5rem;
      opacity: 0.5;
    }

    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #111827;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.125rem;
      color: #6b7280;
      margin-bottom: 2rem;
    }

    .cta-button {
      display: inline-block;
      padding: 0.875rem 2rem;
      background: linear-gradient(135deg, #86C540, #5DC2D1);
      color: white;
      font-weight: 600;
      border-radius: 0.5rem;
      transition: all 0.3s;
      box-shadow: 0 4px 6px rgba(134, 197, 64, 0.2);

      &:hover {
        background: linear-gradient(135deg, #76B530, #4DB2C1);
        box-shadow: 0 6px 12px rgba(134, 197, 64, 0.3);
        transform: translateY(-2px);
      }
    }
  }
`;