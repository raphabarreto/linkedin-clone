import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  WriteIcon,
  CameraIcon,
  VideoCameraIcon,
  DocumentIcon,
  ArticleIcon,
} from './styles';

const FeedShare: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="write">
          <WriteIcon />
          <span>Começar uma publicação</span>
        </div>
        <div className="attachment">
          <button type="button">
            <CameraIcon />
            Foto
          </button>
          <button type="button">
            <VideoCameraIcon />
            Video
          </button>
          <button type="button">
            <DocumentIcon />
            Documento
          </button>
          <button type="button">
            <ArticleIcon />
            Escrever artigo
          </button>
        </div>
      </Container>
    </Panel>
  );
};

export default FeedShare;
