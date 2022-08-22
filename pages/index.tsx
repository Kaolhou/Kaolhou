import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import react from '../media/react-original.svg'
import css from '../media/css3-original.svg'
import html from '../media/html5-original.svg'
import express from '../media/express-original.svg'
import js from '../media/javascript-original.svg'
import node from '../media/nodejs-original.svg'
import pgsql from '../media/postgresql-original.svg'
import sequelize from '../media/sequelize-original.svg'
import ts from '../media/typescript-original.svg'
import csharp from '../media/csharp-original.svg'
import java from '../media/java-original.svg'
import python from '../media/python-original.svg'
import tailwind from '../media/tailwindcss-plain.svg'
import { ApolloError, gql } from '@apollo/client'
import { BoxContainer, ItemConteiner } from '../components/Cards'
import { Content } from '../components/Content'
import Link from 'next/link'
import PostsLinks from '../components/PostLinks'
import { ErrorComponent } from '../components/ErrorComponent'
import client from '../lib/apollo'
// import PostsLinks from '../../components/postLinks/PostsLink';

const GET_POST_QUERY = gql`
    query MyQuery {
        posts2( first: 7, orderBy: publishedAt_DESC) {
            id
            title
            updatedAt
        }
    }
`
export interface GetPostQueryResponse{
    posts2: Array<{
        id:string;
        title:string;
        updatedAt:string;
    }>
}
export interface GetSPPostQueryResponse{
    posts:{
        data:GetPostQueryResponse
        error:null|ApolloError;
        loading:boolean
    }
}

export const getStaticProps:GetStaticProps<GetSPPostQueryResponse> = async function(context){
    const { data,loading,error } = await client.query<GetPostQueryResponse>({
        query:GET_POST_QUERY
    })
    if(error==undefined){
        return{
            props:{
                posts:{
                    data,loading,
                    error:null
                }
            }
        }
    }else{
        return{
            props:{
                posts:{
                    data,loading,error
                }
            }
        }
    }
    
}

const Home: NextPage<GetSPPostQueryResponse> = (props:InferGetStaticPropsType<typeof getStaticProps>) => {
    const {data,loading,error} = props.posts
    return (

        <main className='home-conteiner'>
            <Content/>
            {
                //todo verificar a forma em como lidar com erros por falta de dados
                error?ErrorComponent():
                loading? 'loading':
                data?.posts2.length!==0&&
                <div className='py-3 my-5'>
                    <h1><Link href="/posts">Postagens Recentes</Link></h1>
                    <ul className='flex-col !list-inside !list-disc'>
                        {data?.posts2.map((i,key)=>{
                            if(key===6){
                                return(
                                <Link href='/posts' key={key} className="hover:text-pallete-1 transition-colors underline underline-offset-4 w-20 ml-6 mt-4" >
                                    Leia mais...
                                </Link>
                                ) 
                            }
                            return(
                                <PostsLinks i={i} key={key} index={key} />
                            )
                        })}
                    </ul>
                </div>
            }
            <div className='py-3 my-5'>
                <h1 className="h1this">Conhecimentos</h1>
                <BoxContainer>
                    <ItemConteiner
                        url={css}
                        title="CSS3"
                        content="Avançado"
                        link="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
                    />
                    <ItemConteiner
                        url={html}
                        title="HTML5"
                        content="Avançado"
                        link="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
                    />
                    <ItemConteiner
                        url={js}
                        title="JavaScript"
                        content="Avançado"
                        link="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                    />
                    <ItemConteiner
                        url={ts}
                        title="TypeScript"
                        content="Intermediário"
                        link="https://www.typescriptlang.org/docs/"
                    />
                    <ItemConteiner
                        url={node}
                        title="Node.js"
                        content="Intermediário"
                        link="https://nodejs.org/pt-br/docs/"
                    />
                    <ItemConteiner
                        url={pgsql}
                        title="PostgreSQL"
                        content="Básico"
                        link="https://www.postgresql.org/docs/"
                    />
                    <ItemConteiner
                        url={sequelize}
                        title="Sequelize"
                        content="Intermediário"
                        link="https://sequelize.org/docs/v6/getting-started/"
                    />
                    <ItemConteiner
                        url={express}
                        title="Express.js"
                        content="Intermediário"
                        link="https://expressjs.com"
                    />
                    <ItemConteiner
                        url={react}
                        title="React.js"
                        content="Intermediário"
                        link="https://reactjs.org/docs/getting-started.html"
                    />
                    <ItemConteiner
                        url={java}
                        title="Java"
                        content="Estudando"
                        link="https://www.oracle.com/br/java/technologies/javase-jdk8-doc-downloads.html"
                    />
                    <ItemConteiner
                        url={python}
                        title="Python"
                        content="Estudando"
                        link="https://docs.python.org/pt-br/3/tutorial/"
                    />
                    <ItemConteiner
                        url={tailwind}
                        title="Tailwind"
                        content="Estudando"
                        link="https://tailwindcss.com/docs/installation"
                    />
                    <ItemConteiner
                        url={csharp}
                        title="C#"
                        content="Interessado"
                        link="https://docs.microsoft.com/pt-br/dotnet/csharp/"
                    />
                </BoxContainer>
            </div>
        </main>
    )
}

export default Home
