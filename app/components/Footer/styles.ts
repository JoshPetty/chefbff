"use client";

import styled from "styled-components";

export const Container = styled.footer`
  border-top: 1px solid #f3f4f6;
  padding: 3rem 0;

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      font-weight: 600;
      color: #111827;
    }
  }

  p {
    color: #6b7280;
    font-size: 0.875rem;
  }
`;