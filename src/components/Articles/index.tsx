import React from 'react'
import { useQuery } from 'react-query'
import FetchArticles from '@/api/fetchArticles'

export default function Articles() {

    const { data } = useQuery(
        ['articles'],
        async () => await FetchArticles()
      )

    console.log(data)

    return (
        <div>Articles</div>
    )
}
