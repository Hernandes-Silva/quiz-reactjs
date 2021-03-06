// @flow 
import * as React from 'react';
import * as S from './styles'
type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: string;
    color?: string;
};


export const ButtonOpacity = (props: Props) => {
    const [touched, touchedSet] = React.useState<boolean>(false)

    return (
            <S.CustomButtom
            backgroundColor={props.color} 
            style={{ opacity: touched ? 0.5 : 1, transition: 'opacity 100ms ease' }}
            onMouseDown={() => touchedSet(true)}
            onMouseUp={() => touchedSet(false)}
            onClick={props.onClick} >
                    {props.children}
            </S.CustomButtom>
    );
};
export default ButtonOpacity;