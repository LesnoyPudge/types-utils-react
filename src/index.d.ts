import * as _R from '@types/react';



export type PropsWithRequiredChildren = Required<_R.PropsWithChildren>;

export type PropsWithRequiredChildrenAs<_Children extends _R.ReactNode> = (
    Required<PropsWithChildrenAs<_Children>>
);

export type PropsWithChildrenAs<_Children extends _R.ReactNode> = {
    children?: _Children;
}

export type PropsWithClassName = {
    className?: string;
}

export type RenderFunction<_Args extends unknown[]> = (
    (...props: _Args) => _R.ReactNode
);

export type PropsWithRenderFunction<_Props extends unknown[]> = (
    PropsWithChildrenAs<RenderFunction<_Props>>
);

export type PropsWithRequiredRenderFunction<_Props extends unknown[]> = (
    Required<PropsWithRenderFunction<_Props>>
);

export type PropsWithRenderFunctionOrNode<_Props extends unknown[]> = (
    PropsWithChildrenAs<_R.ReactNode | RenderFunction<_Props>>
);

export type PropsWithChildrenAndClassName = (
    _R.PropsWithChildren & PropsWithClassName
);