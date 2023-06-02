"use client"
import React, { useState } from 'react'


export const Pagination = () => {


    const [PaginationNumber, setPaginationNumber] = useState(1)

    const [PaginationNumberEnd, setPaginationNumberEnd] = useState(10)

    const [pageNumber, setPageNumber] = useState(0)


    const handlePaginationSum = (page: number) => {

        if (page <= 5) {
            setPageNumber(pageNumber + 1)
            setPaginationNumberEnd(pageNumber * 10 + 10)
            setPaginationNumber(pageNumber * 10 + 1)
        }
    }


    const handlePaginationSub = (page: number) => {

        if (page >= 1) {
            setPageNumber(pageNumber - 1);
            setPaginationNumberEnd((pageNumber - 2) * 10 + 10);
            setPaginationNumber((pageNumber - 2) * 10 + 1);
          }
    }
    



  return {
    handlePaginationSum,
    handlePaginationSub,
PaginationNumberEnd,
PaginationNumber,
pageNumber
  }
}
