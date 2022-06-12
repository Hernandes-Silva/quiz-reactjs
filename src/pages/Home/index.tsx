// @flow 
import { FC, useEffect, useState } from 'react';
import ButtonOpacity from '../../components/ButtonOpacity';
import { listCategories } from '../../services/Api';
import { getCredentials } from '../../utils/cookies/credentials';
import { CategoryText, Container, ContainerBody, ContainerCategories, ContainerRanking, Title, TitleStyled } from './styles';
import {  Link} from "react-router-dom";
import paths from '../../routes/paths';

const Home: FC = (props) => {
    const [textBollean, setTextBollean] = useState<boolean>(false)
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const myRequest = async () => {
            const { data } = await listCategories();
            setCategories(data);
        }
        myRequest();
    }, [])
    return (
        <Container>
            <ContainerBody>
                <ContainerCategories >
                    <Title>Categories: </Title>
                    <hr />
                    {categories && categories.map((category: any, index: number) => {
                        return <CategoryText key={index}>
                            <Link to={`${paths.QUIZ}${category.id}/`}>{category.name}</Link>
                            
                            </CategoryText>;
                    })}
                </ContainerCategories>
                <ContainerRanking>
                    alou
                </ContainerRanking>
            </ContainerBody>
        </Container>
    );
};

export default Home;