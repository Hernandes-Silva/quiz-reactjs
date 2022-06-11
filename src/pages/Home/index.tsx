// @flow 
import { FC, useEffect, useState } from 'react';
import ButtonOpacity from '../../components/ButtonOpacity';
import { listCategories } from '../../services/Api';
import { getCredentials } from '../../utils/cookies/credentials';
import { CategoryText, Cei, Container, ContainerCategories, Title, TitleStyled } from './styles';

type Props = {

};
const Home: FC = (props: Props) => {
    const [textBollean, setTextBollean] = useState<boolean>(false)
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const myRequest = async () => {
            const { data } = await listCategories();
            console.log(data)
            setCategories(data);
        }
        myRequest();
    }, [])
    return (
        <Container>
            <ContainerCategories >
                <Title>Categories:</Title>
                <hr/>
                {categories && categories.map((category: any, index:number) => {
                    return <CategoryText key={index}>{category.name}</CategoryText>;
                })}
            </ContainerCategories>
        </Container>
    );
};

export default Home;