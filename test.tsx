import { RT } from "./namespace";
import { FC } from "react";

// import { ReactT } from "index";
// import type ReactT from '@types/react';



const Comp2: FC<RT.PropsWithRenderFunction<[name: string]>> = ({
    children
}) => {
    const arg = 'wow';
    return children && children(arg);
}

const Comp3: FC<RT.PropsWithRenderFunctionOrNode<[name: string]>> = ({
    children
}) => {
    const arg = 'wow';
    return children instanceof Function ? children(arg) : children;
}

const Comp: FC<RT.PropsWithChildrenAndClassName> = ({
    className = '',
    children,
}) => {
    return (
        <>
            <Comp3>
                <></>
            </Comp3>

            <Comp3>
                {(name) => {
                    return <></>
                }}
            </Comp3>
            
            <Comp2>
                {(name) => {
                    return <></>
                }}
            </Comp2>
        </>
    )
}