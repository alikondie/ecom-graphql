import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/Shop/Shop.selector';
import { ICollection, IRootState } from '../../types';
import CollectionPreview from '../CollectionPreview/CollectionPreview.component';
import { CollectionsOverviewContainer } from './CollectionOverview.styles';

interface IProps {
  collections: ICollection[];
}

const CollectionsOverview: React.FC<IProps> = ({ collections }) => {
  // const collections = useSelector((state: IRootState) =>
  //   selectCollectionsForPreview(state)
  // );
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
