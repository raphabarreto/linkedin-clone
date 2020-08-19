import React from 'react';

import { Container } from './styles';

const AdBanner: React.FC = () => {
  return (
    <Container className="ad-banner">
      <span>Agradecimentos à Rocketseat - </span>
      Interface reproduzida em busca do próximo nível.
    </Container>
  );
};

export default AdBanner;
