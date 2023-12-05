import { FileType } from '@/typeings'
import {ArrowDownUp} from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

function TableWrapper(
    {skeletonFiles} : {skeletonFiles :FileType[]}
) {
  return (
    <div>
          <Button className='text-sm'>
              Sort By
          <ArrowDownUp className='m-0.5 h-5'></ArrowDownUp>
          </Button>
          {/* <DataTable colums={columns} data= {initialFiles}/> */}
    </div>
  )
}

export default TableWrapper
