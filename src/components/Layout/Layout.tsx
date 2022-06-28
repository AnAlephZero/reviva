import React, { Fragment } from 'react';
import MainHeader from './MainHeader';


export interface ILayoutProps {
    children?: React.ReactNode
};

const Layout: React.FC<ILayoutProps> = (props) => {
    return (
        <Fragment>
            <MainHeader />
            <p>{props.children}</p>
        </Fragment>
    );
}

export { Layout };