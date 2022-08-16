import { FormEvent } from "react";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'
import './markdown.css'

interface MarkdownProps{
    preview: boolean;
    callback?: (e:FormEvent)=>void;
    init?:string;
    content:{
        title:string;
        data:string;
    };
    setContent: (data:{
        title:string;
        data:string;
    })=>void
    setPreview: (data:boolean)=>void
}

export default function Markdown({
    preview,
    callback,
    //init = '',
    setPreview,
    content,
    setContent
}:MarkdownProps){


    return(
        <form onSubmit={callback}>
            {
                preview? 
                <div className="markdown">
                    <ReactMarkdown remarkPlugins={[gfm]}>
                        {content.data}
                    </ReactMarkdown>
                </div>:
                <>
                    <label htmlFor="title" className="justify-center m-auto flex gap-2 py-2">
                        <span className="flex items-center">Título:</span>
                        <input id="title"
                        type={'text'} 
                        className="border-2 border-black text-black rounded-md p-1 px-2"
                        onChange={e => setContent({title:e.target.value, data: content.data})}
                        defaultValue={content.title}></input>
                    </label>
                    <textarea 
                    className="@apply m-auto w-[100%] sm:w-[calc(100%-15rem)] md:w-[calc(100%-30rem)] lg:w-[calc(100%-45rem)]
                    px-2 bg-slate-300 rounded-md p-5 block min-h-[25rem]"
                    onChange={e => setContent({data:e.target.value,title: content.title})} defaultValue={content.data}>

                        
                    </textarea>
                </>
            }
            <div className="flex justify-center gap-2 py-2">
                <button 
                    type="button"
                    onClick={()=>setPreview(!preview)}
                    className="bg-red-600 px-3 py-2 rounded-md hover:bg-red-700 transition-colors">
                        {preview?'Edit':'Preview'}
                    
                </button>
                <button
                    className="bg-red-600 px-3 py-2 rounded-md hover:bg-red-700 transition-colors"
                    type="submit"                    
                >Enviar</button>
            </div>
        </form>
    )
}