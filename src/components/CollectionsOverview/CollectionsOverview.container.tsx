import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import { gql } from 'apollo-boost';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.component';
import CollectionsOverview from './CollectionsOverview.component';

const GET_COLLECTIONS = gql`
  {
    collections {
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

const CollectionsOverviewContainer = () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, data, error }: QueryResult) => {
      //   console.log('Loading => ', loading);
      //   console.log('Error => ', error);
      //   console.log('Data => ', data);
      if (loading)
        return (
          <LoadingSpinner isLoading={loading} isError={error?.toString()} />
        );
      return <CollectionsOverview collections={data.collections} />;
    }}
  </Query>
);

export default CollectionsOverviewContainer;
