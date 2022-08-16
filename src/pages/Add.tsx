import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import Markdown from "../markdown/markdown";

const CREATE_POST_MUTATION = gql`
    mutation CreatePosts ($title:String!, $content:String!) {
        createPosts(data: {title: $title, content: $content}){
            id
        }
    }
`
const PUBLISH_FROM_ID_MUTATION = gql`
    mutation PublishPosts ($id:ID!) {
        publishPosts(where: {id: $id}){
            id
        }
    }
`
interface mutationReturn{
    createPosts:{
        id:string;
        __typename: string
    }
}

export default function Add(){
    const [ preview, setPreview ] = useState(false)
    const [content, setContent] = useState({data:'', title:''})
    const [ createPost, { data, loading } ] = useMutation<mutationReturn>(CREATE_POST_MUTATION)
    const [ publishPost, publish ] = useMutation(PUBLISH_FROM_ID_MUTATION)


    data&&console.log(data?.createPosts.id)
    async function callback(e:FormEvent){
        e.preventDefault()

        let id = await createPost({
            variables:{
                title: content.title,
                content:content.data
            },
            onError(e){
                throw new Error(e.message)
            }
        })
        
        loading ? console.log(loading) : publishPost({
            variables:{id: id.data?.createPosts.id},
            onError(e){
                throw new Error(e.message)
            }
        })
    }
    
    return(
        <main>
           <h1>Adicionar Postagens</h1> 
           <Markdown preview={preview} setPreview={setPreview} callback={callback} content={content} setContent={setContent} />
           
        </main>
    )
}