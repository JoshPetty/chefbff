"use client";

import styled from "styled-components";

export const Container = styled.div`
  .recipe-link {
    display: block;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-4px);
    }
  }

  .image-container {
    margin-bottom: 1rem;
    overflow: hidden;
    border-radius: 0.5rem;
    background: #f3f4f6;
    aspect-ratio: 4 / 3;
    border: 2px solid transparent;
    transition: border-color 0.3s;

    .recipe-link:hover & {
      border-color: #86C540;
    }
  }

  .recipe-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;

    .recipe-link:hover & {
      transform: scale(1.05);
    }
  }

  .placeholder-image {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #86C540, #5DC2D1);

    .emoji {
      font-size: 4rem;
      opacity: 0.6;
    }
  }

  .recipe-content {
    .recipe-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #111827;
      margin-bottom: 0.5rem;
      transition: color 0.3s;

      .recipe-link:hover & {
        color: #86C540;
      }
    }

    .recipe-description {
      color: #4b5563;
      margin-bottom: 0.75rem;
      line-height: 1.625;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .recipe-meta {
      font-size: 0.875rem;
      color: #5DC2D1;
      font-weight: 500;
    }
  }
`;