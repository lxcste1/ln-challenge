/**
 * Componente - Contenedor de artículos.
 * @author Lucas Tello
 * @created 06/03/2024
 */

import React from 'react'

import { useQuery } from 'react-query'
import FetchArticles from '@/api/fetchArticles'

import Card from '../Card'

export default function Articles() {

    // Obtención de los artículos
    const { data } = useQuery(
        ['articles'],
        async () => await FetchArticles()
    )

    /**
     * Filtro para el tipo de artículo
     * @mainArticle - artículo principal
     * @secondaryArticle - artículos secundarios
     */
    const mainArticle = data?.filter((article) => {
        return article.type == 'main'
    })

    const secondaryArticle = data?.filter((article) => {
        return article.type == 'secondary'
    })

    return (
        <div className='flex flex-wrap lg:min-w-[925px] md:min-w-[680px] lg:mt-[10px] justify-between'>
            <div>
                {mainArticle?.map((e, i) => (
                    <Card key={i} info={e}/>
                ))}
            </div>
            <div className="border-l-[1px] border-[#CCCCCC]"></div>
            <div>
                {secondaryArticle?.map((e, i) => (
                    <Card key={i} info={e} />
                ))}
            </div>

        </div>
    )
}
