import {
  ArrowsCounterClockwise, ChatCircle, Heart,
} from 'phosphor-react';
import React from 'react';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
} from './styles';

const Tweet: React.FC = () => (
  <Container>
    <Retweeted>
      <ArrowsCounterClockwise className="retweetIcon" />
      you retweeted
    </Retweeted>

    <Body>
      <Avatar />

      <Content>
        <Header>
          <strong>React</strong>
          <span>@reactjs</span>

          <Dot />
          <time>May, 6</time>
        </Header>

        <Description>Twitter ui clone</Description>

        <ImageContent />

        <Icons>
          <Status>
            <ChatCircle
              className="icon"
            />
            77
          </Status>
          <Status>
            <ArrowsCounterClockwise
              className="icon"
            />
            167
          </Status>
          <Status>
            <Heart
              className="icon"
            />
            1278
          </Status>
        </Icons>
      </Content>
    </Body>
  </Container>
);

export default Tweet;
