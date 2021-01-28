import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import { gql } from 'apollo-boost';

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner.component';
import { useParams } from 'react-router-dom';
import CollectionPage from './Collection.component';

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

interface IShopParams {
  collectionId: string;
}

const CollectionPageContainer = () => {
  const { collectionId } = useParams<IShopParams>();

  return (
    <Query query={GET_COLLECTION_BY_TITLE} variables={{ title: collectionId }}>
      {({ loading, data, error }: QueryResult) => {
        // console.log('Loading => ', loading);
        // console.log('Error => ', error);
        // console.log('Data => ', data);
        if (loading)
          return (
            <LoadingSpinner isLoading={loading} isError={error?.toString()} />
          );
        const { getCollectionsByTitle } = data;
        return <CollectionPage collection={getCollectionsByTitle} />;
      }}
    </Query>
  );
};

export default CollectionPageContainer;
