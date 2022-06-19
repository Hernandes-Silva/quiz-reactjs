// @flow 
import { FC, useEffect, useState } from 'react';
import ButtonOpacity from '../../components/ButtonOpacity';
import { listCategories, listRankingGlobal } from '../../services/Api';
import { getTokenAndRefreshToken } from '../../utils/cookies/credentials';
import { CategoryText, HomeContainer, ContainerCategories, ContainerDataTable, ContainerRanking, Title, TitleStyled } from './styles';
import { Link } from "react-router-dom";
import paths from '../../routes/paths';
import { ContainerLightGlobal, TextSecondary } from '../../styles/styleds';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Rank',
        selector: (row: any) => row.rank,
        sortable: true,
        style: {
            fontSize: 18,
            fontWeigth: 'bold'
        },
    },
    {
        name: 'Score',
        selector: (row: any) => row.score_t,
    },
    {
        name: 'Nome',
        selector: (row: any) => row.user__first_name,
        sortable: true,
    },

];
const Home: FC = () => {
    const [categories, setCategories] = useState([]);
    const [rankingGlobal, setRankingGlobal] = useState([])
    
    useEffect(() => {
        const myRequest = async () => {
            const { data } = await listCategories();
            setCategories(data);
        }
        myRequest();
    }, [])

    useEffect(() => {
        const ranking = async () => {
            const { data } = await listRankingGlobal();
            for(let rankPosition = 0; rankPosition < data.length; rankPosition++){
                data[rankPosition].rank = rankPosition + 1;
            }
            setRankingGlobal(data);
        }
        ranking();
    }, [])

    return (
        <ContainerLightGlobal>
            <HomeContainer>
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
                    <Title>Ranking Global</Title>

                    <ContainerDataTable>
                        {rankingGlobal &&
                            <DataTable
                                columns={columns}
                                data={rankingGlobal}
                                theme="solarized"
                                responsive
                            />
                        }
                    </ContainerDataTable>
                </ContainerRanking>

            </HomeContainer>
        </ContainerLightGlobal>
    );
};

export default Home;