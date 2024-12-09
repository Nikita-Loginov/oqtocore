'use client';
import React from 'react';
import styled from 'styled-components';

import Social from '@/components/shared/Social/Social';

const FooterBox = styled.footer`
    padding: 80px 0;
    border-top: 1px solid rgb(55, 55, 55);
    position: relative;
`;

const FooterItems = styled.div`
    display: flex;
    gap: 120px;
    position:relative;
    z-index: 10;
`;

const FooterItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 300px;
`;

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const FooterItemTitle = styled.h2`
    font-size: 28px;
    font-weight: 700;
    line-height: 1.17;
`;

const FooterList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const FooterLinkText = styled.span`
    transition: all 0.5s;
    font-weight: 600;
`;

const FooterLinkItem = styled.a`
    display: flex;
    gap: 8px;
    color: #fff;
    transition: all 0.5s;

    &:hover {
        ${FooterLinkText} {
            opacity: 0.5;
        }
    }
`;

const FooterSpanItem = styled.span`
    display: flex;
    gap: 8px;
    color: #fff;
    transition: all 0.5s;
`;

const FooterDecor = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
`;

export const Footer: React.FC = () => {
    return (
        <FooterBox>
            <div className='container'>
                <FooterItems>
                    <FooterItem>
                        <FooterItemTitle>Our contacts</FooterItemTitle>
                        <FooterContent>
                            <Social />

                            <FooterList>
                                <li className='footer__link'>
                                    <FooterLinkItem
                                        href='tel:+41215050033'
                                        className='footer__link-item-ext'
                                    >
                                        <span className='footer__link-decor'>
                                            <img
                                                src='./icons/phone.svg'
                                                alt=''
                                            />
                                        </span>
                                        <FooterLinkText>
                                            +41 215 050 033 Switzerland, Lausanne
                                        </FooterLinkText>
                                    </FooterLinkItem>
                                </li>

                                <li className='footer__link'>
                                    <FooterLinkItem
                                        href='tel:+16469805740'
                                        className='footer__link-item-ext'
                                    >
                                        <span className='footer__link-decor'>
                                            <img
                                                src='./icons/phone.svg'
                                                alt=''
                                            />
                                        </span>
                                        <FooterLinkText>
                                            +1 646 980 5740 USA, New York
                                        </FooterLinkText>
                                    </FooterLinkItem>
                                </li>

                                <li className='footer__link'>
                                    <FooterLinkItem
                                        href='tel:+18884071205'
                                        className='footer__link-item-ext'
                                    >
                                        <span className='footer__link-decor'>
                                            <img
                                                src='./icons/phone.svg'
                                                alt=''
                                            />
                                        </span>

                                        <FooterLinkText>
                                            +1 888 407 1205 USA toll free
                                        </FooterLinkText>
                                    </FooterLinkItem>
                                </li>
                            </FooterList>
                        </FooterContent>
                    </FooterItem>

                    <FooterItem>
                        <FooterItemTitle>Our Location</FooterItemTitle>

                        <FooterContent>
                            <FooterList>
                                <li className='footer__link'>
                                    <FooterSpanItem>
                                        <span className='footer__link-decor'>
                                            <img
                                                src='./icons/map-pin.svg'
                                                alt=''
                                            />
                                        </span>

                                        <FooterLinkText>
                                            OQTACORE Sàrl, CHE-406.118.174 Lausanne, Rue Haldimand
                                            10 c/o Drys Fiduciaire SA
                                        </FooterLinkText>
                                    </FooterSpanItem>
                                </li>
                            </FooterList>
                        </FooterContent>
                    </FooterItem>

                    <FooterItem>
                        <FooterItemTitle>Menu</FooterItemTitle>

                        <FooterContent>
                            <FooterList style={{ gap: '20px' }}>
                                <li className='footer__link'>
                                    <FooterLinkItem
                                        className='footer__link-item-ext'
                                        href='/services'
                                    >
                                        <FooterLinkText>
                                            Services
                                        </FooterLinkText>
                                    </FooterLinkItem>
                                </li>

                                <li className='footer__link'>
                                    <FooterLinkItem
                                        className='footer__link-item-ext'
                                        href='/cases'
                                    >
                                        <FooterLinkText>
                                            Case studies
                                        </FooterLinkText>
                                    </FooterLinkItem>
                                </li>

                                <li className='footer__link'>
                                    <FooterLinkItem
                                        className='footer__link-item-ext'
                                        href='/about'
                                    >
                                        <FooterLinkText>
                                            About us
                                        </FooterLinkText>
                                    </FooterLinkItem>
                                </li>

                                <li className='footer__link'>
                                    <FooterLinkItem
                                        className='footer__link-item-ext'
                                        href='/blog'
                                    >
                                        <FooterLinkText>
                                            Blog
                                        </FooterLinkText>
                                    </FooterLinkItem>
                                </li>
                            </FooterList>
                        </FooterContent>
                    </FooterItem>
                </FooterItems>

                <FooterDecor>
                    <picture>
                        <source
                            srcSet='./images/footer/decor.webp'
                            type='image/webp'
                        />
                        <source
                            srcSet='./images/footer/decor.png'
                            type='image/png'
                        />
                        <img
                            loading='lazy'
                            src='./images/footer/decor.png'
                            alt=''
                        />
                    </picture>
                    <picture>
                        <source
                            srcSet='./images/footer/decor.webp'
                            type='image/webp'
                        />
                        <source
                            srcSet='./images/footer/decor.png'
                            type='image/png'
                        />
                        <img
                            loading='lazy'
                            src='./images/footer/decor.png'
                            alt=''
                        />
                    </picture>
                </FooterDecor>
            </div>
        </FooterBox>
    );
};
