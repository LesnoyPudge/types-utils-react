import { RT } from "index";
import { FC } from "react";

// import { ReactT } from "index";
// import type ReactT from '@types/react';



const Comp2: FC<RT.PropsWithRendedFunction<[name: string]>> = ({children}) => {
    const arg = 'wow';
    return children instanceof Function ? children(arg) : children;
}


const Comp: FC<RT.PropsWithChildrenAndClassName> = ({
    className = '',
    children,
}) => {
    return (
        <>
            <Comp2>
                <></>
            </Comp2>
            
            <Comp2>
                {(name) => {
                    return <></>
                }}
            </Comp2>
        </>
    )
}