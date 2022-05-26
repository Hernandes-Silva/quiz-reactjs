// @flow 
import * as React from 'react';
import * as S from './styles'
type Props = {
    children: React.ReactNode
};


export const ButtonOpacity = (props: Props) => {
    const [touched, touchedSet] = React.useState<boolean>(false)
    const handleClick = () => {
        return
    }
    return (
            <S.CustomButtom 
            style={{ opacity: touched ? 0.5 : 1, transition: 'opacity 100ms ease' }}
            onMouseDown={() => touchedSet(true)}
            onMouseUp={() => touchedSet(false)}
            onClick={() => handleClick()} >
                    {props.children}
            </S.CustomButtom>
    );
};
export default ButtonOpacity;