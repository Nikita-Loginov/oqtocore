import styled from 'styled-components';
import React from "react";

const LinkDecor = styled.span`
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
        content: '';
        width: 16px;
        height: 16px;
        background-image: url(./icons/arrow-down.svg);
        background-repeat: no-repeat;
        background-position: center;
        transform: translateY(-30px);
        transition: all 0.5s;
    }
`;

const Link = styled.a`
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

    &:after {
        position: absolute;
        content: '';
        height: 100%;
        width: 60%;
        transform: translate(0%, 100%);
        background-color: #fff;
        border-radius: inherit;
        transform-origin: bottom;
        transition: transform 0.6s, width 0.5s, background-color 0.6s;
    }

    &:hover {
        &:after {
            transform: translate(0%, 0%);
            width: 100%;
            background-color: rgb(43, 36, 255);
        }

        img {
            transform: translateY(30px);
            transition: all 0.3s;
        }

        ${LinkDecor} {
            background-color: #010101;

            &:before {
                transform: translateY(0);
            }
        }
    }
`;

const LinkText = styled.span`
    position: relative;
    z-index: 10;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
`;

interface LinkUniqProps {
    iconName: string;
    linkText: string;
    linkUrl: string;
}

export const LinkUniq: React.FC<LinkUniqProps> = ({ iconName, linkText, linkUrl }) => {
    return (
        <Link href={linkUrl}>
            <LinkText>{linkText}</LinkText>

            <LinkDecor className='link-uniq__decor'>
                <img
                    src={`./icons/${iconName}.svg`}
                    alt=''
                    loading='lazy'
                />
            </LinkDecor>
        </Link>
    );
}
