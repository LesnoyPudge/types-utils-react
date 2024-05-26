import * as RT from '@types/react';

export type PropsWithClassName = {
    className?: string;
}

export type RenderFunction<_Args extends unknown[]> = (
    (...props: _Args) => RT.ReactNode
);

export type PropsWithRendedFunction<_Props extends unknown[]> = {
    children?: RT.ReactNode | RenderFunction<_Props>;
};

export type PropsWithChildrenAndClassName = (
    RT.PropsWithChildren<PropsWithClassName>
);