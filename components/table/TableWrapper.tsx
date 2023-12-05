import { FileType } from '@/typeings'
import React from 'react'
import { Button } from '../ui/button'

function TableWrapper(
    {skeletonFiles} : {skeletonFiles :FileType[]}
) {
  return (
    <div>
          <Button>Sort By </Button>
          {/* <DataTable colums={columns} data= {initialFiles}/> */}
    </div>
  )
}

export default TableWrapper
