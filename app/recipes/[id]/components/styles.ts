"use client";

import styled from "styled-components";

export const Container = styled.div`
  .recipe-container {
    max-width: 56rem;
    margin: 0 auto;
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .image-section {
    width: 100%;
    height: 28rem;
    overflow: hidden;

    @media (max-width: 768px) {
      height: 20rem;
    }
  }

  .recipe-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder-image {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #86C540, #5DC2D1);

    .emoji {
      font-size: 8rem;
      opacity: 0.6;

      @media (max-width: 768px) {
        font-size: 6rem;
      }
    }
  }

  .content-section {
    padding: 3rem;

    @media (max-width: 768px) {
      padding: 2rem;
    }
  }

  .recipe-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1rem;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .recipe-description {
    font-size: 1.25rem;
    color: #6b7280;
    margin-bottom: 3rem;
    line-height: 1.75;
  }

  .section {
    margin-bottom: 3rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .section-title {
    font-size: 1.875rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 3px solid #86C540;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .ingredients-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .ingredient-item {
    display: flex;
    align-items: flex-start;
    font-size: 1.125rem;
    color: #374151;
    line-height: 1.75;

    .bullet {
      color: #86C540;
      font-size: 1.5rem;
      font-weight: 700;
      margin-right: 0.75rem;
      flex-shrink: 0;
    }
  }

  .instructions-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .instruction-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    .step-number {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      background: linear-gradient(135deg, #86C540, #5DC2D1);
      color: white;
      border-radius: 50%;
      font-weight: 700;
      font-size: 1.125rem;
      flex-shrink: 0;
    }

    p {
      font-size: 1.125rem;
      color: #374151;
      line-height: 1.75;
      padding-top: 0.25rem;
    }
  }
`;