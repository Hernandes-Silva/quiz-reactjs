// @flow 
import { FC, useEffect, useState } from 'react';
import ButtonOpacity from '../../components/ButtonOpacity';
import { listCategories, listRankingGlobal } from '../../services/Api';
import { getCredentials } from '../../utils/cookies/credentials';
import { CategoryText, Container, ContainerCategories, ContainerDataTable, ContainerRanking, Title, TitleStyled } from './styles';
import { Link } from "react-router-dom";
import paths from '../../routes/paths';
import { TextSecondary } from '../../styles/styleds';
import DataTable from 'react-data-table-component';

type PropsUserRank = {
    score_t: number
    user: number
    user__first_name: string
}
const columns = [
    {
        name: 'Rank',
        selector: (row: any) => row.rank,
        sortable: true,
        style: {
            fontSize: 18,
            fontWeigth:'bold'
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
const Home: FC = (props) => {
    const [textBollean, setTextBollean] = useState<boolean>(false)
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
            const newDate = data.map((item:any, index:number)=>{
                item.rank = index+1;
                return item
            })
            setRankingGlobal(data);
        }
        ranking();
    }, [])

    return (
        <Container>
            
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
                    <hr />
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
            
        </Container>
    );
};

export default Home;