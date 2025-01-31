"use client"
import { Room } from '@/app/Room'
import React from 'react'
import SideNav from '../../_components/SideNav'
import DocumentEditorSection from '../../_components/DocumentEditorSection'

const WorkspaceDocument = ({ params }) => {
  return (
    <Room params={params}>
        <div>
            {/* Side Nav  */}
            <div className=''>
                <SideNav params={params} />
            </div>

            {/* Document  */}
            <div className='md:ml-72'>
                <DocumentEditorSection params={params} />
            </div>
        </div>
    </Room>
  )
}

export default WorkspaceDocument