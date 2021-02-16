import React from 'react';

import ServerButton from '../ServerButton';
import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return(
      <Container>
          <ServerButton isHome />

          <Separator />

          <ServerButton />
          <ServerButton hasNotifications/>
          <ServerButton mentions={420}/>
          <ServerButton />
          <ServerButton />
          <ServerButton />
          <ServerButton hasNotifications/>
          <ServerButton />
          <ServerButton />
          <ServerButton mentions={88}/>
          <ServerButton />
          <ServerButton />
          
      </Container>
  );
}

export default ServerList;