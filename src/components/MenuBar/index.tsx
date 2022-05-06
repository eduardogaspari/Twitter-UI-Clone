import {
  Bell, BookmarkSimple, DotsThree, DotsThreeCircle, EnvelopeSimple, Hash, House, TwitterLogo, User,
} from 'phosphor-react';
import React from 'react';
import Button from '../Button';

import {
  Container, Topside, MenuButton, Bothside, Avatar, ProfileData,
} from './styles';

const MenuBar: React.FC = () => (
  <Container>
    <Topside>
      <TwitterLogo
        className="twitter"
      />

      <MenuButton>
        <House
          className="icon"
        />
        <span>Home</span>
      </MenuButton>

      <MenuButton>
        <Hash
          className="icon"
        />
        <span>Explore</span>
      </MenuButton>

      <MenuButton>
        <Bell
          className="icon"
        />
        <span>Notifications</span>
      </MenuButton>

      <MenuButton>
        <EnvelopeSimple
          className="icon"
        />
        <span>Messages</span>
      </MenuButton>

      <MenuButton>
        <BookmarkSimple
          className="icon"
        />
        <span>Bookmarks</span>
      </MenuButton>

      <MenuButton>
        <User
          className="icon"
        />
        <span>Profile</span>
      </MenuButton>

      <MenuButton>
        <DotsThreeCircle
          className="icon"
        />
        <span>More</span>
      </MenuButton>

      <Button>
        <span>Tweet</span>
      </Button>
    </Topside>

    <Bothside>
      <Avatar />

      <ProfileData>
        <strong>Eduardo Lopes</strong>
        <span>@eduardolopes777</span>
      </ProfileData>

      <DotsThree className="moreIcon" />
    </Bothside>
  </Container>
);

export default MenuBar;
