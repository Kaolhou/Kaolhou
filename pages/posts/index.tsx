import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import Link from "next/link"
import { GetPostQueryResponse, GetSPPostQueryResponse } from "../index"
import { ErrorComponent } from "../../components/ErrorComponent"
import PostsLinks from "../../components/PostLinks"
import client from "../../lib/apollo"
import { gql } from "@apollo/client"
import Head from "next/head"


const GET_POST_QUERY = gql`
    query MyQuery {
        posts2( first: 7, orderBy: publishedAt_DESC) {
            id
            title
            updatedAt
        }
    }
`

export const getStaticProps:GetStaticProps<GetSPPostQueryResponse> = async function(context){
    const { data,loading,error } = await client.query<GetPostQueryResponse>({
        query:GET_POST_QUERY
    })
    return{
        props:{
            posts:{
                data,loading,
                error: error==undefined?null:error
            }
        }
    }
}

const Posts:NextPage<GetSPPostQueryResponse> = function(props:InferGetStaticPropsType<typeof getStaticProps>){
    const {loading,data,error} = props.posts
    return(
        <div className="px-6">
            {
                //todo verificar a forma em como lidar com erros por falta de dados
                error?ErrorComponent():
                loading? 'loading':
                data?.posts2.length!==0&&
                <div className='py-3 my-5'>
                    <Head>
                        <title>Postagens</title>
                    </Head>
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
        </div>
    )
}
export default Posts