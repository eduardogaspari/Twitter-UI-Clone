import { MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import StickyBox from 'react-sticky-box';
import FollowSuggestion from '../FollowSuggestion';
import List from '../List';
import News from '../News';

import {
  Container, SearchWrapper, SearchInput, Body,
} from './styles';

const SideBar: React.FC = () => (
  <Container>
    <SearchWrapper>
      <SearchInput
        placeholder="Search Twitter"
      />
      <MagnifyingGlass
        className="searchIcon"
      />
    </SearchWrapper>
    <StickyBox>
      <Body>
        <List
          title="You might like"
          elements={[
            <FollowSuggestion
              name="Next.js"
              nickname="@nextjs"
            />,
            <FollowSuggestion
              name="Node.js"
              nickname="@nodejs"
            />,
            <FollowSuggestion
              name="React Native"
              nickname="@reactnative"
            />,
          ]}
        />

        <List
          title="What’s happening"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />

        <List
          title="What’s happening"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />

        <List
          title="What’s happening"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />

        <List
          title="What’s happening"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />
      </Body>
    </StickyBox>
  </Container>
);

export default SideBar;
