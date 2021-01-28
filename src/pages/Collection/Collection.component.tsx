import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/CollectionItem/CollectionItem.component';
import { selectCollection } from '../../redux/Shop/Shop.selector';
import { ICollection, IItem, IRootState } from '../../types';
import {
  CollectionPageContainer,
  CollectionPageItems,
  CollectionPageTitle,
} from './Collection.styles';
import './Collection.styles.scss';

interface IShopParams {
  collectionId: string;
}

interface IProps {
  collection: ICollection;
}

const CollectionPage: React.FC<IProps> = ({ collection }) => {
  const { collectionId } = useParams<IShopParams>();
  // const collection = useSelector((state: IRootState) =>
  //   selectCollection(collectionId)(state)
  // );

  return (
    <CollectionPageContainer>
      <CollectionPageTitle>{collection?.title}</CollectionPageTitle>
      <CollectionPageItems>
        {collection?.items.map((item: IItem) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionPageItems>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
