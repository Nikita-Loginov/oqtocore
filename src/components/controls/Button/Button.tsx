import styled from "styled-components";
import React from "react";

interface ButtonDecorProps {
  icon: string;
  positionBeforeIcon?: string;
}


const ButtonDecor = styled.span<ButtonDecorProps>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: relative;
  z-index: 10;
  overflow: hidden;
  transition: all 0.5s;

  img {
    width: 16px !important;
    height: 16px !important;
    bottom: auto !important;
    transition: all 0.5s;
    display: flex;
    left: auto !important;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
  }

  &:before {
    position: absolute;
    content: "";
    width: 16px;
    height: 16px;
    background-image: url(${(props) => props["icon"]});
    background-repeat: no-repeat;
    background-position: center;
    transform: translateY(-30px);
    transition: all 0.5s;
    transform: translate(
      ${(props) => props["position-before-icon"] || "-24px, 24px"}
    );
  }

  @media (max-width: 500px) {
    background-color: #010101;
  }
`;

const ButtonBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  gap: 8px;
  min-height: 60px;
  border-radius: 48px;
  padding: 0 12px;
  transition: all 0.5s;
  transform-origin: bottom;
  color: #fff;
  position: relative;
  overflow: hidden;
  background-color: transparent;

  &:after {
    position: absolute;
    content: "";
    height: 100%;
    width: 60%;
    transform: translate(0%, 100%);
    background-color: #fff;
    border-radius: inherit;
    transform-origin: bottom;
    transition: transform 0.6s, width 0.5s, background-color 0.6s;
  }

  &:disabled {
    background: rgb(55, 55, 55);
    opacity: 0.4;
    pointer-events: none;
  }

  &:hover {
    &:after {
      transform: translate(0%, 0%);
      width: 100%;
      background-color: rgb(43, 36, 255);
    }

    img {
      transition: all 0.5s;

      transform: translate(
        ${(props) => props["position-first-hover"] || "24px, -24px"}
      );
    }

    ${ButtonDecor} {
      background-color: #010101;

      &:before {
        transform: translate(0);
      }
    }
  }

  @media (max-width: 500px) {
    background-color: rgb(43, 36, 255);
    gap: 64px;

    &:after {
      background-color: rgb(43, 36, 255);
    }
  }
`;

const ButtonText = styled.span`
  position: relative;
  z-index: 10;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
`;

interface ButtonProps {
  iconName?: string;
  linkText?: string;
  positionIconFirstHover?: string;
  positionIconSecond?: string;
  onClick?: () => void;
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  iconName,
  linkText,
  onClick,
  positionIconFirstHover,
  positionIconSecond,
  disabled
}) => {
  return (
    <ButtonBox
      disabled={disabled}
      className="button-uniq"
      type="button"
      onClick={onClick}
      position-first-hover={positionIconFirstHover}
    >
      <ButtonText>{linkText}</ButtonText>

      <ButtonDecor
        className="button-decor"
        icon={`./icons/${iconName}.svg`}
        position-before-icon={positionIconSecond}
      >
        <img src={`./icons/${iconName}.svg`} alt={linkText} loading="lazy" />
      </ButtonDecor>
    </ButtonBox>
  );
}
