import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useInboxNotifications, useUnreadInboxNotificationsCount, useUpdateRoomNotificationSettings } from '@liveblocks/react';
import { InboxNotification, InboxNotificationList } from '@liveblocks/react-ui';

import React, { useEffect } from 'react'

const NotificationBox = ({ children }) => {
  const { inboxNotifications = [] } = useInboxNotifications() || {};
  const updateRoomNotificationSettings = useUpdateRoomNotificationSettings();
  const { count = 0, error, isLoading } = useUnreadInboxNotificationsCount() || {};
  useEffect(()=>{
    if(!isLoading && !error){
      updateRoomNotificationSettings({threads:'all'})
      console.log(count)
    }
  },[count, error, isLoading, updateRoomNotificationSettings])
  
  return (
    <Popover>
      <PopoverTrigger>
          <div className='flex gap-1'>
      {children} <span className='p-1 px-2 -ml-3 rounded-full text-[7px] bg-primary text-white'>{count}</span>
          </div></PopoverTrigger>
      <PopoverContent className={'w-[500px]'}>
      <InboxNotificationList>
        {inboxNotifications.map((inboxNotification) => (
          <InboxNotification
            key={inboxNotification.id}
            inboxNotification={inboxNotification}
          />
        ))}
      </InboxNotificationList>
      </PopoverContent>
    </Popover>
  )
}

export default NotificationBox