"use client";

import styled from "styled-components";

export const Container = styled.div`
  .recipe-link {
    display: block;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.85;
    }
  }

  .image-container {
    margin-bottom: 1rem;
    overflow: hidden;
    border-radius: 0.5rem;
    background: #f3f4f6;
    aspect-ratio: 4 / 3;
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
    background: linear-gradient(135deg, #f3f4f6, #e5e7eb);

    .emoji {
      font-size: 4rem;
      opacity: 0.4;
    }
  }

  .recipe-content {
    .recipe-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #111827;
      margin-bottom: 0.5rem;
      transition: opacity 0.3s;

      .recipe-link:hover & {
        opacity: 0.7;
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
      color: #6b7280;
    }
  }
`;