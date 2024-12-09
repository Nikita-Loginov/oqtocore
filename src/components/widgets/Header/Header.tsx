'use client';
import React from 'react';
import styled from 'styled-components';
import Link from '@/components/controls/Link/Link';

const HeaderBox = styled.header`
    padding: 20px 0;
    position: fixed;
    width: 100%;
    border-bottom: 1px solid rgb(55, 55, 55);
    backdrop-filter: blur(35.3px);
    background: rgba(255, 255, 255, 0.01);
    z-index: 1000;
`;

const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

const HeaderList = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const HeaderLinkInfo = styled.a`
    line-height: 1.35;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
    transition: all 0.5s;

    &:hover {
        opacity: 0.5;
    }
`;

export const Header: React.FC = () => {
    return (
        <HeaderBox>
            <div className='container'>
                <HeaderInner>
                    <a
                        className='header__logo'
                        href='/'
                    >
                        <img
                            src='./images/header/logo.svg'
                            alt='ogtacore logo'
                        />
                    </a>

                    <div className='header__menu'>
                        <HeaderList>
                            <li className='header__link'>
                                <HeaderLinkInfo
                                    href='/services'
                                >
                                    Services
                                </HeaderLinkInfo>
                            </li>

                            <li className='header__link'>
                                <HeaderLinkInfo
                                    href='/cases'
                                >
                                    Case studies
                                </HeaderLinkInfo>
                            </li>

                            <li className='header__link'>
                                <HeaderLinkInfo
                                    href='/about'
                                >
                                    About us
                                </HeaderLinkInfo>
                            </li>
                            <li className='header__link'>
                                <HeaderLinkInfo
                                    href='/blog'
                                >
                                    Blog
                                </HeaderLinkInfo>
                            </li>
                        </HeaderList>
                    </div>

                    <Link iconName='comment'>Contact us</Link>
                </HeaderInner>
            </div>
        </HeaderBox>
    );
};
