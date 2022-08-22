import { ApolloError, gql } from "@apollo/client";
import isLessThan10 from "../../utils/isLessThan10";
import FourOhFour from "../404";
import Markdown from "../../components/Markdown";
import client from "../../lib/apollo";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";

export interface GetPostQueryResponse{
    posts: {
        content:string;
        title:string;
        updatedAt:string;
    }
}
export interface GetSPPostQueryResponse{
    posts:{
        data:GetPostQueryResponse
        error:null|ApolloError;
        loading:boolean
    }
}
interface IParams extends ParsedUrlQuery {
    id: string
}
export const getStaticProps:GetStaticProps<GetSPPostQueryResponse> = async function(context:GetStaticPropsContext){
    const { id } = context.params as IParams
    const GET_POST_QUERY = gql`
        query MyQuery {
            posts(where: {id: "${id}"}) {
                content
                title
                updatedAt
            }
        }
    `
    
    const { loading, data, error } = await client.query<GetPostQueryResponse>({
        query: GET_POST_QUERY,
    });
    

    if(error){
        return{
            props:{
                posts:{loading,data,error}
            }
        }
    }else{
        return{
            props:{
                posts:{loading,data,error:null}
            }
        }
    }
}
export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export default function PostId(props:InferGetStaticPropsType<typeof getStaticProps>){
    const {loading,data,error} = props.posts
    var strDate = ''

    if(!loading){
        if(data?.posts.title){
            // console.log(data?.posts.title)
            let parseDate = new Date(data.posts.updatedAt)
            let day = isLessThan10(parseDate.getDate())
            let month = isLessThan10(parseDate.getMonth())
            let year = isLessThan10(parseDate.getFullYear())
            let hours = isLessThan10(parseDate.getHours())
            let minutes = isLessThan10(parseDate.getMinutes())
            strDate=`${day}/${month}/${year} às ${hours}:${minutes}`
            // console.log(strDate)
        }
        // if(!data?.posts.title){
        //     router.push('/')
        // }
        
    }

    return(
        <div className="min-h-[75vh]">
            {
                error?<FourOhFour />:
                loading? 'loading': 
                data?
                <>
                    <Head>
                        <title>{data?.posts?.title || "project title not found"}</title>
                        <meta name="twitter:title" content={data.posts.title}/>
                        <meta name="twitter:card" content="summary"/>
                        <link rel="icon" type="image/svg+xml" href="public/favicon.svg" />

                    </Head>
                    <div className="py-6 flex-col flex justify-center">
                        <h1 className="flex justify-center">{data.posts.title}</h1>
                        <span className="flex justify-center">Editado: {strDate}</span>
                    </div>
                    <Markdown str={data.posts.content} />
                </>:
                <FourOhFour/>
            }
        </div>
    )
}