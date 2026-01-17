"use client";

import styled from "styled-components";

export const Container = styled.section`
  padding: 8rem 2rem 6rem;
  
  .hero-content {
    max-width: 56rem;
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
    line-height: 1.1;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.25rem;
    color: #4b5563;
    margin-bottom: 2.5rem;
    line-height: 1.75;
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;

    @media (max-width: 640px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .primary-button {
    padding: 0.75rem 2rem;
    background: #111827;
    color: white;
    font-weight: 500;
    border-radius: 0.375rem;
    transition: background 0.3s;

    &:hover {
      background: #1f2937;
    }
  }

  .secondary-button {
    padding: 0.75rem 2rem;
    border: 1px solid #d1d5db;
    color: #111827;
    font-weight: 500;
    border-radius: 0.375rem;
    transition: all 0.3s;

    &:hover {
      border-color: #9ca3af;
      background: #f9fafb;
    }
  }
`;