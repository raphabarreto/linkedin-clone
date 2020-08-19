import React from 'react';

import {
  Container,
  Wrapper,
  LinkedInIcon,
  SearchInput,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
  CaretDownIcon,
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <nav>
            <button type="button" className="active">
              <HomeIcon />
              <span>Início</span>
            </button>
            <button type="button">
              <NotificationsIcon />
              <span>Notificações</span>
            </button>
            <button type="button">
              <ProfileCircle src="https://github.com/raphabarreto.png" />
              <span>
                Eu
                <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default DesktopHeader;
