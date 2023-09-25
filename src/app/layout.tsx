// import './__globals__.css'
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {Layout, Menu} from 'antd';
import {AppstoreOutlined, MailOutlined} from '@ant-design/icons';
import React from 'react';
import Link from "next/link";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

type Props = {
    children: React.ReactNode,
}

export default function RootLayout({children}: Props) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div>
                    <Layout>
                        <Menu
                            mode={'horizontal'}
                            items={[
                                {
                                    label: <Link href="/overview">Overview</Link>,
                                    key: 'overview',
                                    icon: <MailOutlined/>,
                                },
                                {
                                    label: <Link href="/desks">Desks</Link>,
                                    key: 'desks',
                                    icon: <AppstoreOutlined/>,
                                },
                                {
                                    label: <Link href="/stats">Stats</Link>,
                                    key: 'stats',
                                    icon: <AppstoreOutlined/>,
                                },
                            ]}
                        />
                        <div>{children}</div>
                    </Layout>
                </div>
            </body>
        </html>
    );
}
