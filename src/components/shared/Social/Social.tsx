'use client';
import styled from 'styled-components';

const SocialBox = styled.ul`
    display: flex;
    gap: 8px;
`;

const SociaLink = styled.li`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: transparent;
    transition: all 0.5s;

    &:hover {
        background-color: #fff;
    }
`;

const SocialItem = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        path {
            transition: all 0.5s;
            fill: #fff;
        }
    }
`;

export default function Social() {
    return (
        <SocialBox>
            <SociaLink>
                <SocialItem
                    href='https://www.linkedin.com/company/oqtacore'
                >
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <g clipPath='url(#clip0_988_2374)'>
                            <path
                                d='M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z'
                                fill='white'
                            />
                        </g>
                        <defs>
                            <clipPath id='clip0_988_2374'>
                                <rect
                                    width='24'
                                    height='24'
                                    fill='white'
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </SocialItem>
            </SociaLink>

            <SociaLink>
                <SocialItem
                    href='t.me/oqtacore_cto'
                >
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <g clipPath='url(#clip0_988_2377)'>
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85905C11.2628 9.34452 8.93014 10.3493 5.43189 11.8734C4.86383 12.0993 4.56626 12.3203 4.53917 12.5364C4.49339 12.9016 4.95071 13.0454 5.57347 13.2412C5.65818 13.2679 5.74595 13.2955 5.83594 13.3247C6.44864 13.5239 7.27283 13.7569 7.70129 13.7662C8.08994 13.7745 8.52373 13.6143 9.00264 13.2855C12.2712 11.0791 13.9584 9.96393 14.0643 9.93989C14.139 9.92293 14.2426 9.9016 14.3128 9.96397C14.3829 10.0263 14.376 10.1444 14.3686 10.1761C14.3233 10.3693 12.5281 12.0382 11.5991 12.9019C11.3095 13.1711 11.1041 13.3621 11.0621 13.4058C10.968 13.5035 10.8721 13.5959 10.78 13.6847C10.2108 14.2334 9.78391 14.6449 10.8036 15.3169C11.2936 15.6398 11.6858 15.9069 12.077 16.1733C12.5042 16.4642 12.9303 16.7544 13.4816 17.1158C13.6221 17.2079 13.7562 17.3035 13.8869 17.3966C14.3841 17.7511 14.8307 18.0695 15.3826 18.0188C15.7032 17.9892 16.0345 17.6877 16.2027 16.7885C16.6002 14.6633 17.3816 10.0586 17.5622 8.1611C17.578 7.99485 17.5581 7.78209 17.5422 7.6887C17.5262 7.5953 17.4928 7.46223 17.3714 7.36372C17.2276 7.24706 17.0056 7.22246 16.9064 7.22421C16.455 7.23216 15.7626 7.47294 12.43 8.85905Z'
                                fill='white'
                            />
                        </g>
                        <defs>
                            <clipPath id='clip0_988_2377'>
                                <rect
                                    width='24'
                                    height='24'
                                    fill='white'
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </SocialItem>
            </SociaLink>

            <SociaLink>
                <SocialItem
                    href='x.com/oqtacore_devs'
                >
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M18.3263 1.90381H21.6998L14.3297 10.3273L23 21.7898H16.2112L10.894 14.8378L4.80995 21.7898H1.43443L9.31743 12.7799L1 1.90381H7.96111L12.7674 8.25814L18.3263 1.90381ZM17.1423 19.7706H19.0116L6.94539 3.81694H4.93946L17.1423 19.7706Z'
                            fill='white'
                        />
                    </svg>
                </SocialItem>
            </SociaLink>
        </SocialBox>
    );
}
