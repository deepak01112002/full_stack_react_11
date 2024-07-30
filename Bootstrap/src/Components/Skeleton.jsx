import {Stack,Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

import React from 'react'

function SkeletonCom() {
  return (
    <div>
        <Stack>
            <Skeleton height='20px' margin="100px"   />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
        </Stack>
    </div>
  )
}

export default SkeletonCom