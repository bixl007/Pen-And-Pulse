import React from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import BlobCursor, { BlobCursorProps } from '@/blocks/Animations/BlobCursor/BlobCursor';

const ConditionalBlobCursor: React.FC<BlobCursorProps> = (props) => {
  const isLg = useMediaQuery('(min-width: 1024px)');

  if (!isLg) {
    return <>{props.children}</>;
  }

  return <BlobCursor {...props} />;
};

export default ConditionalBlobCursor;
