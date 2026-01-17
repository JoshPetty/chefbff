"use client";

import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #f3f4f6;
  z-index: 50;

  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transition: opacity 0.3s;
    z-index: 51;
    
    &:hover {
      opacity: 0.8;
    }

    span {
      font-size: 1.25rem;
      font-weight: 600;
      color: #111827;
    }
  }

  .desktop-nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      font-weight: 500;
      color: #4b5563;
      transition: color 0.3s;

      &:hover {
        color: #111827;
      }

      &.active {
        color: #111827;
        border-bottom: 2px solid #111827;
        padding-bottom: 0.25rem;
      }

      &.button {
        padding: 0.5rem 1.5rem;
        background: #111827;
        color: white;
        border-radius: 0.375rem;
        border-bottom: none;
        
        &:hover {
          background: #1f2937;
        }
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .menu {
    display: none;
    width: 2.5rem;
    height: 2.5rem;
    position: relative;
    cursor: pointer;
    z-index: 51;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.375rem;
    }

    &::before,
    &::after,
    span {
      content: '';
      position: absolute;
      width: 1.5rem;
      height: 0.125rem;
      background: #111827;
      transition: all 0.3s;
    }

    &::before {
      top: 0.625rem;
    }

    span {
      top: 50%;
      transform: translateY(-50%);
    }

    &::after {
      bottom: 0.625rem;
    }

    &.active {
      &::before {
        transform: rotate(45deg);
        top: 50%;
      }

      span {
        opacity: 0;
      }

      &::after {
        transform: rotate(-45deg);
        bottom: 50%;
      }
    }
  }

  .mobile-overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: white;
    z-index: 40;

    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .mobile-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;

      a {
        font-size: 1.5rem;
        font-weight: 600;
        color: #4b5563;
        transition: color 0.3s;

        &:hover {
          color: #111827;
        }

        &.button {
          padding: 0.75rem 2rem;
          background: #111827;
          color: white;
          border-radius: 0.375rem;
          font-size: 1.25rem;
        }
      }
    }
  }
`;