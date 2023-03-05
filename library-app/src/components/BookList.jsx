import React from "react";
import Loader from './Loader';


export default function BookList({loading, books, completeList, search}){


    if(loading){
        return <Loader />
    }
    return(
        <div className="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Latest Published Year</th>
                        <th scope="col">First Published Year</th>
                    </tr>
                </thead>
            {search.length<1 ?
                        <tbody>
                        {books?.map((item)=>{
                                return (
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>{
                                             item.author_name?.map((auth)=>{
                                                return <p>{auth}</p>
                                             })
                                            }
                                        </td>
                                        <td>{item.publish_year[0]}</td>
                                        <td>{item.first_publish_year}</td>
                                    </tr>
                                
                            )
                        })}
                        </tbody>
                        
                :
                <tbody>
                {completeList?.map((item)=>{
                        return (
                            <tr>
                                <td>{item.title}</td>
                                <td>{
                                     item.author_name?.map((auth)=>{
                                        return <p>{auth}</p>
                                        })
                                    }
                                    </td>
                                    <td>{item.publish_year[0]}</td>
                                    <td>{item.first_publish_year}</td>
                            </tr>
                        
                    )
                })}
                </tbody>

        
        }
        </table>

        </div>

    )
}