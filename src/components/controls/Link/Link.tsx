import styled from 'styled-components';
import React from 'react';

interface LinkProps {
    linkUrl: string;
    iconName: string;
    className?: string;
    children: React.ReactNode; 
    style?: React.CSSProperties;
}

const LinkBox = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    font-size: 14px;
    color: #fff;
    font-weight: 700;
    min-height: 52px;
    padding: 0 8px 0 16px;
    border-radius: 48px;
    text-transform: uppercase;
    background-color: rgb(43, 36, 255);
    transition: all 0.2s;

    &:hover {
        box-shadow: 0px 0px 30.1px 0px rgba(43, 36, 255, 0.7);

        .link__decor {
            &:before {
                transform: translate(0, 0);
            }

            img {
                transform: translate(24px, -24px);
                transition: all 0.3s;
            }
        }
    }
`;

const LinkDecor = styled.span`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(1, 1, 1);
    position: relative;
    overflow: hidden;

    &:before {
        position: absolute;
        content: '';
        width: 17px;
        height: 17px;
        background-image: url(./icons/arrow-up-right.svg);
        background-repeat: no-repeat;
        transform: translate(-24px, 24px);
        transition: all 0.5s;
    }

    img {
        width: 17px;
        height: 17px;
        transition: all 0.5s;
    }
`;

export default function Link({ children, iconName, linkUrl, className, style }: LinkProps) {
    return (
        <LinkBox
            href={linkUrl}
            className={className}
        >
            <span className='link__text'>{children}</span>

            <LinkDecor className='link__decor'>
                <img
                    width='16'
                    height='16'
                    src={`./icons/${iconName}.svg`}
                    alt={iconName}
                    style={style}
                    loading='lazy'
                />
            </LinkDecor>
        </LinkBox>
    );
}
