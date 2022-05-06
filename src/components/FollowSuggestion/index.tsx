import React from 'react';

import {
  Container, Avatar, Info, FollowButton,
} from './styles';

interface FollowSuggestionProps {
  name: string;
  nickname: string;
}

const FollowSuggestion: React.FC<FollowSuggestionProps> = ({ name, nickname }) => (
  <Container>
    <div>
      <Avatar />

      <Info>
        <strong>{name}</strong>
        <span>{nickname}</span>
      </Info>
    </div>

    <FollowButton outlined>
      Follow
    </FollowButton>
  </Container>
);

export default FollowSuggestion;
